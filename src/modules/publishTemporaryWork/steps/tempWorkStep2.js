const dbDraft = require('../../../db/models/draft');
const fUserShowTemporaryWorkMenu = require('../../../logicFunctions/fUserShowTemporaryWorkMenu');
const bot = require('../../../bot');
const chooseLocationKeyboard = require('../keyboards/chooseLocationKeyboard');
const strings = require('../../../strings');

function tempWorkStep2(query) {
  //console.log(query);
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
          let chatId = query.message.chat.id;
          let messageId = query.message.message_id;
          bot.deleteMessage(chatId, messageId);
          fUserShowTemporaryWorkMenu(query);
          return 0;
        }

        let language = draft.language;

        if (query.data == 'choose_publ_tempwork_categorie_cancel') {
          // Якщо відміна на етапі 2

          bot.deleteMessage(chatId, messageId);
          fUserShowTemporaryWorkMenu(query);
          return 0;
        }

        draft.categorie = query.data.slice(31);
        draft.save().then(() => {
          //Міняємо клаву категорій на клаву локацій І рівня

          keyboardChooseLocation = chooseLocationKeyboard(language);

          var opts = {
            reply_markup: keyboardChooseLocation,
            chat_id: chatId,
            message_id: messageId,
            parse_mode: 'HTML'
          };

          let tempWorkStep3Text = strings(language).temporaryWorkStep3Text;

          bot.editMessageText(tempWorkStep3Text, opts);
        });
      }
    }
  );
}
module.exports = tempWorkStep2;
