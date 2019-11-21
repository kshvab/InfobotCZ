const bot = require('../bot');
//const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const jobMenuKeyboard = require('../menus/jobMenuKeyboard');

function fUserShowjobMenu(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;
      chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

      const jobMenuMessage =
        strings(language).jobMenuIcon + strings(language).jobMenuMessage;

      const opts = {
        reply_markup: {
          keyboard: jobMenuKeyboard(person),
          resize_keyboard: true,
          one_time_keyboard: false
        },
        parse_mode: 'HTML'
      };

      bot.sendMessage(chatId, jobMenuMessage, opts);
    }
  });
}

module.exports = fUserShowjobMenu;
