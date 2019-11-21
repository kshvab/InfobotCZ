const bot = require('../bot');
//const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const temporaryWorkMenuKeyboard = require('../menus/temporaryWorkMenuKeyboard');

function fUserShowTemporaryWorkMenu(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;
      chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

      const temporaryWorkMenuMessage =
        strings(language).temporaryWorkMenuIcon +
        strings(language).temporaryWorkMenuMessage;

      const opts = {
        reply_markup: {
          keyboard: temporaryWorkMenuKeyboard(person),
          resize_keyboard: true,
          one_time_keyboard: false
        },
        parse_mode: 'HTML'
      };

      bot.sendMessage(chatId, temporaryWorkMenuMessage, opts);
    }
  });
}

module.exports = fUserShowTemporaryWorkMenu;
