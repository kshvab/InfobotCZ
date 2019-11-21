const bot = require('../bot');
//const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const transportationMenuKeyboard = require('../menus/transportationMenuKeyboard');

function fUserShowTransportationMenu(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;
      chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

      const transportationMenuMessage =
        strings(language).transportationMenuIcon +
        strings(language).transportationMenuMessage;

      const opts = {
        reply_markup: {
          keyboard: transportationMenuKeyboard(person),
          resize_keyboard: true,
          one_time_keyboard: false
        },
        parse_mode: 'HTML'
      };

      bot.sendMessage(chatId, transportationMenuMessage, opts);
    }
  });
}

module.exports = fUserShowTransportationMenu;
