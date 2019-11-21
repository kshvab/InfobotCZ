const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');

const strings = require('../strings');
const mainMenuKeyboard = require('../menus/mainMenuKeyboard');
const fUserInitialization = require('./fUserInitialization');

function fUserShowHelpMessage(msg) {
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;
      showHelp(msg, language);
    }
  });
}

function showHelp(msg, language) {
  chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  const helpMessage = strings(language).helpMessage;

  let keyboardShare = JSON.stringify({
    inline_keyboard: [
      [{ text: strings(language).share, callback_data: 'share' }]
    ]
  });

  bot.sendMessage(chatId, helpMessage, {
    reply_markup: keyboardShare,
    parse_mode: 'HTML'
  });
}

module.exports = fUserShowHelpMessage;
