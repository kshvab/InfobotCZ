const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const mainMenuKeyboard = require('../menus/mainMenuKeyboard');

function fUserShowUnderConstruction(msg) {
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;
      showUnderConstruction(msg, language);
    }
  });
}

function showUnderConstruction(msg, language) {
  chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  const underConstructionMessage = strings(language).underConstructionMessage;

  const opts = {
    reply_markup: {
      keyboard: mainMenuKeyboard(language),
      resize_keyboard: true,
      one_time_keyboard: false
    },
    parse_mode: 'HTML'
  };

  bot.sendMessage(chatId, underConstructionMessage, opts);
}

module.exports = fUserShowUnderConstruction;
