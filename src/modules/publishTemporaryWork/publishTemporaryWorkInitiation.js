const bot = require('../../bot');

const strings = require('../../strings');
const fUserInitialization = require('../../logicFunctions/fUserInitialization');
const dbUser = require('../../db/models/user');

// ----- Ця функція викликається, де параметром є контакт користувача
function publishTemporaryWorkInitiation(msg) {
  let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  //console.log(msg);

  dbUser.findOne({ telegramUserId: chatId }, function(err, person) {
    if (err) {
      console.log(err);
      return 0;
    }

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;

      let contactPermissionKeyboard = [
        [
          {
            text: strings(language).contactPermissionButton,
            request_contact: true
          }
        ],
        [strings(language).back]
      ];

      let temporaryWorkContactPermissionText = strings(language)
        .temporaryWorkContactPermissionText;

      const opts = {
        reply_markup: {
          keyboard: contactPermissionKeyboard,
          resize_keyboard: true,
          one_time_keyboard: true
        },
        parse_mode: 'HTML'
      };

      bot.sendMessage(chatId, temporaryWorkContactPermissionText, opts);
    }
  });
}
module.exports = publishTemporaryWorkInitiation;
