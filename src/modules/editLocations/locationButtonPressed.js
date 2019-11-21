const bot = require('../../bot');
const strings = require('../../strings');
const dbUser = require('../../db/models/user');
const subKeyboard = require('./subKeyboard');

const fUserShowTemporaryWorkMenu = require('../../logicFunctions/fUserShowTemporaryWorkMenu');
function locationButtonPressed(query) {
  let userId = query.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) console.log('USER NOT exist');
    // DEV +++++++++++++++++++++++++++++++++++
    else {
      if (query.data == 'location_back') {
        let chatId = query.message.chat.id;
        let messageId = query.message.message_id;
        bot.deleteMessage(chatId, messageId);
        fUserShowTemporaryWorkMenu(query);
        return;
      }

      fChangeKeyboard(query, person);
      return;
    }
    return;
  });

  function fChangeKeyboard(query, person) {
    var msg = query.message;

    newKeyboard = subKeyboard(query.data.slice(9), person);

    var opts = {
      reply_markup: newKeyboard,
      chat_id: msg.chat.id,
      message_id: msg.message_id,
      parse_mode: 'HTML'
    };

    let textEditCategories = strings(person.language).editLocationsMessage;

    bot.editMessageText(textEditCategories, opts).catch(error => {
      console.log(error);
    });
  }
}
module.exports = locationButtonPressed;
