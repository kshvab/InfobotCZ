const bot = require('../../bot');
const strings = require('../../strings');
const editLocationsInlineKeyboard = require('./editLocationsInlineKeyboard');

function showEditLocationsInlineKeyboard(msg, person) {
  chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  let language = person.language;

  var keyboardStr = editLocationsInlineKeyboard(person);

  let editLocationsMessage = strings(language).editLocationsMessage;

  bot.sendMessage(chatId, editLocationsMessage, {
    reply_markup: keyboardStr,
    parse_mode: 'HTML'
  });
}

module.exports = showEditLocationsInlineKeyboard;
