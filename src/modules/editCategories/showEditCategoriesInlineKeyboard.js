const bot = require('../../bot');
const strings = require('../../strings');
const editCategoriesInlineKeyboard = require('./editCategoriesInlineKeyboard');

function showEditCategoriesInlineKeyboard(msg, person) {
  chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  let language = person.language;

  var keyboardStr = editCategoriesInlineKeyboard(person);

  let editCategoriesMessage = strings(language).editCategoriesMessage;

  bot.sendMessage(chatId, editCategoriesMessage, {
    reply_markup: keyboardStr,
    parse_mode: 'HTML'
  });
}

module.exports = showEditCategoriesInlineKeyboard;
