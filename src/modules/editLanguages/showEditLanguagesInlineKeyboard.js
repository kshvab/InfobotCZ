const bot = require('../../bot');
const strings = require('../../strings');
const editLanguagesInlineKeyboard = require('./editLanguagesInlineKeyboard');

function showEditLanguagesInlineKeyboard(msg, person) {
  chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  let language = person.language;

  var keyboardStr = editLanguagesInlineKeyboard(person);

  let editLanguagesMessage = strings(language).editLanguagesMessage;

  bot.sendMessage(chatId, editLanguagesMessage, {
    reply_markup: keyboardStr,
    parse_mode: 'HTML'
  });
}

module.exports = showEditLanguagesInlineKeyboard;
