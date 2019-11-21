const bot = require('../../bot');
const dbUser = require('../../db/models/user');

const fUserInitialization = require('../../logicFunctions/fUserInitialization');

const showEditLocationsInlineKeyboard = require('./showEditLocationsInlineKeyboard');

function fEditLocations(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      showEditLocationsInlineKeyboard(msg, person);
    }
  });
}

module.exports = fEditLocations;
