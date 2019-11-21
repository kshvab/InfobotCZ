const bot = require('../bot');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const mainMenuKeyboard = require('../menus/mainMenuKeyboard');

function fNewVersionMessage() {
  dbUser.find({}, function(err, persons) {
    if (err) return handleError(err);

    for (let i = 0; i < persons.length; i++) {
      let language = persons[i].language;
      let telegramUserId = persons[i].telegramUserId;
      const newVersionMessage = strings(language).newVersionMsg;

      const opts = {
        reply_markup: {
          keyboard: mainMenuKeyboard(persons[i].language),
          resize_keyboard: true,
          one_time_keyboard: false
        },
        parse_mode: 'HTML'
      };

      bot.sendMessage(telegramUserId, newVersionMessage, opts).catch(error => {
        console.log(error);
      });
    }
  });
}

module.exports = fNewVersionMessage;
