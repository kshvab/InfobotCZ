const dbDraft = require('../../../db/models/draft');
const fUserShowTemporaryWorkMenu = require('../../../logicFunctions/fUserShowTemporaryWorkMenu');
const strings = require('../../../strings');
const bot = require('../../../bot');
const chooseSubLocationKeyboard = require('../keyboards/chooseSubLocationKeyboard');

function tempWorkStep3(query) {
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
        //console.log(query.data);

        let language = draft.language;

        if (query.data == 'choose_publ_tempwork_location_cancel') {
          // Якщо відміна на етапі 3
          bot.deleteMessage(chatId, messageId);
          fUserShowTemporaryWorkMenu(query);
          return 0;
        } else {
          keyboardChooseSubLocation = chooseSubLocationKeyboard(
            query.data.slice(30),
            language
          );

          var opts = {
            reply_markup: keyboardChooseSubLocation,
            chat_id: chatId,
            message_id: messageId,
            parse_mode: 'HTML'
          };

          let tempWorkStep3Text = strings(language).temporaryWorkStep3Text;

          bot.editMessageText(tempWorkStep3Text, opts);
        }
      }
    }
  );
}
module.exports = tempWorkStep3;
