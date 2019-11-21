const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const showMainMenu = require('../menus/showMainMenu');
const { DEFAULT_LANGUAGE } = require('../../config');

function fUserInitialization(msg) {
  let userId = msg.from.id;
  let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      addNewPerson();
      showMainMenu(chatId, DEFAULT_LANGUAGE);
    } else {
      let language = person.language;

      showMainMenu(chatId, language);
    }

    function addNewPerson() {
      let newUser = new dbUser({
        _id: new mongoose.Types.ObjectId(),
        telegramUserId: userId,
        firstName: msg.from.first_name,
        lastName: msg.from.last_name,
        userName: msg.from.username,
        language: DEFAULT_LANGUAGE
      });

      newUser.save(function(err) {
        if (err) throw err;

        bot.sendMessage(
          '455174812',
          '🎾 👤 NEW USER Added! ' +
            newUser.firstName +
            ' ' +
            newUser.lastName +
            ' (' +
            newUser.userName +
            ')'
        );
        console.log(
          '🎾 👤 NEW USER Added! ' +
            newUser.firstName +
            ' ' +
            newUser.lastName +
            ' (' +
            newUser.userName +
            ')'
        );
      });
    }
  });
}

module.exports = fUserInitialization;
