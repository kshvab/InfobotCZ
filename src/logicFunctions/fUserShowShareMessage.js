const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const mainMenuKeyboard = require('../menus/mainMenuKeyboard');
const fUserInitialization = require('./fUserInitialization');

function fUserShowShareMessage(msg) {
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;
      showShare(msg, language);
    }
  });
}

function showShare(msg, language) {
  chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  const shareFirstMsg = strings(language).shareFirstMsg;
  const shareBotUsernameMsg = strings(language).shareBotUsernameMsg;
  const shareLinkMsg = strings(language).shareLinkMsg;

  bot.sendMessage(chatId, shareFirstMsg).then(() => {
    bot.sendMessage(chatId, shareBotUsernameMsg).then(() => {
      const opts = {
        reply_markup: {
          keyboard: mainMenuKeyboard(language),
          resize_keyboard: true,
          one_time_keyboard: false
        },
        parse_mode: 'HTML'
        //disable_web_page_preview: true
      };

      bot.sendMessage(chatId, shareLinkMsg, opts);
    });
  });
}

module.exports = fUserShowShareMessage;
