const bot = require('../../bot');
const dbUser = require('../../db/models/user');

const fUserInitialization = require('../../logicFunctions/fUserInitialization');

const showEditLanguagesInlineKeyboard = require('./showEditLanguagesInlineKeyboard');

function fEditLanguages(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      showEditLanguagesInlineKeyboard(msg, person);
    }
  });
}

module.exports = fEditLanguages;
