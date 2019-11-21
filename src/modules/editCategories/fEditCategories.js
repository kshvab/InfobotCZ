const bot = require('../../bot');
const dbUser = require('../../db/models/user');

const fUserInitialization = require('../../logicFunctions/fUserInitialization');

const showEditCategoriesInlineKeyboard = require('./showEditCategoriesInlineKeyboard');

function fEditCategories(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      showEditCategoriesInlineKeyboard(msg, person);
    }
  });
}

module.exports = fEditCategories;
