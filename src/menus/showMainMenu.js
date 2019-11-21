const bot = require('../bot');
const strings = require('../strings');
const mainMenuKeyboard = require('./mainMenuKeyboard');

function showMainMenu(chatId, language) {
  const mainMenuMessage = strings(language).mainMenuMessage;

  const opts = {
    reply_markup: {
      keyboard: mainMenuKeyboard(language),
      resize_keyboard: true,
      one_time_keyboard: true
    },
    parse_mode: 'HTML'
  };

  bot.sendMessage(chatId, mainMenuMessage, opts);
}

module.exports = showMainMenu;
