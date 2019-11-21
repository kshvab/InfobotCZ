const bot = require('../../bot');
const strings = require('../../strings');
const dbUser = require('../../db/models/user');
const editLanguagesInlineKeyboard = require('./editLanguagesInlineKeyboard');
const showMainMenu = require('../../menus/showMainMenu');

function languageButtonPressed(query) {
  let userId = query.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) console.log('USER NOT exist');
    // DEV +++++++++++++++++++++++++++++++++++
    else {
      if (query.data == 'language_back') {
        let chatId = query.message.chat.id;
        let messageId = query.message.message_id;
        bot.deleteMessage(chatId, messageId);
        showMainMenu(chatId, person.language);
        return;
      }
      switch (query.data) {
        case 'language_languageRu':
          person.language = 'RU';
          break;
        case 'language_languageCz':
          person.language = 'CZ';
          break;
        case 'language_languageEn':
          person.language = 'EN';
          break;
        default:
          person.language = 'UA';
      }

      person.save();

      fChangeKeyboard(query, person);

      return;
    }
    return;
  });

  function fChangeKeyboard(query, person) {
    var msg = query.message;

    //console.log(msg, person);
    newKeyboard = editLanguagesInlineKeyboard(person);

    var opts = {
      reply_markup: newKeyboard,
      chat_id: msg.chat.id,
      message_id: msg.message_id,
      parse_mode: 'HTML'
    };

    let textEditLanguages = strings(person.language).editLanguagesMessage;

    bot.editMessageText(textEditLanguages, opts);
  }
}
module.exports = languageButtonPressed;
