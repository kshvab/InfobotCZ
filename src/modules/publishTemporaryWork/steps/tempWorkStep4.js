const dbDraft = require('../../../db/models/draft');
const fUserShowTemporaryWorkMenu = require('../../../logicFunctions/fUserShowTemporaryWorkMenu');
const bot = require('../../../bot');
const publishOrCancelKeyboard = require('../keyboards/publishOrCancelKeyboard');
const beautyJSON = require('../../../helpers/beautyJSON');
const strings = require('../../../strings');

function tempWorkStep4(query) {
  let chatId = query.message.chat.id;
  let messageId = query.message.message_id;

  let telegramUserId = query.from.id;

  dbDraft.findOne(
    { telegramUserId: telegramUserId, section: 'temporaryWork' },
    function(err, draft) {
      if (err) {
        console.log(err);
        return 0;
      } else {
        if (!draft) {
          //    оч маловероятно
          //    если вдруг Драфта не существует
          //    показываем меню фушек
          bot.deleteMessage(chatId, messageId);
          fUserShowTemporaryWorkMenu(query);
          return 0;
        }

        let categorie;
        let language = draft.language;

        if (query.data == 'choose_publ_tempwork_sub_location_cancel') {
          // Якщо відміна на етапі 2

          bot.deleteMessage(chatId, messageId);
          fUserShowTemporaryWorkMenu(query);
          return 0;
        }

        draft.location = query.data.slice(34);

        draft.save().then(() => {
          //Видаляємо клаву сублокацій
          // ізапитуємо на введення тексту оголошення
          bot.deleteMessage(chatId, messageId);

          let tempWorkStep4Text = strings(language).temporaryWorkStep4Text;

          bot.sendMessage(chatId, tempWorkStep4Text, {
            parse_mode: 'HTML'
          });

          bot.once('message', msg => {
            draft.text = msg.text;

            let preparedText = '🧰 ';
            preparedText += `<b>${draft.title}</b>\n\n`;
            preparedText += strings(language).temporaryWorkPreparedText
              .draftText;
            preparedText += draft.text;
            preparedText += strings(language).temporaryWorkPreparedText
              .draftInfo;
            preparedText += strings(language).temporaryWorkPreparedText
              .draftCategorie;
            preparedText += strings(language).jobCategories[draft.categorie];
            preparedText += strings(language).temporaryWorkPreparedText
              .draftLocation;
            preparedText += flocationNormalText(draft.location, language);
            preparedText += strings(language).temporaryWorkPreparedText
              .draftFirstName;
            preparedText += draft.firstName;
            preparedText += strings(language).temporaryWorkPreparedText
              .draftPhoneNumber;
            preparedText += draft.phoneNumber;

            draft.preparedText = preparedText;
            draft.save().then(() => {
              let tempWorkStep5Text = strings(language).temporaryWorkStep5Text;

              tempWorkStep5Text +=
                draft.preparedText + '\n➖➖➖➖➖➖➖➖➖➖➖';

              var keyboardStr = publishOrCancelKeyboard(language);

              bot.sendMessage(msg.chat.id, tempWorkStep5Text, {
                reply_markup: keyboardStr,
                parse_mode: 'HTML'
              });
            });
          });
        });
      }
    }
  );
}

function flocationNormalText(loc, language) {
  let obj = strings(language).locations;
  for (key in obj) {
    if (obj[key].hasOwnProperty(loc)) {
      let newObj = obj[key];
      return newObj[loc];
    }
  }
}

module.exports = tempWorkStep4;
