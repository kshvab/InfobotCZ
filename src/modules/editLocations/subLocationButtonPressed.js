const bot = require('../../bot');
const strings = require('../../strings');
const dbUser = require('../../db/models/user');
const subKeyboard = require('./subKeyboard');
const editLocationsInlineKeyboard = require('./editLocationsInlineKeyboard');

function subLocationButtonPressed(query) {
  let userId = query.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) console.log('USER NOT exist');
    // DEV +++++++++++++++++++++++++++++++++++
    else {
      if (query.data == 'sub_location_back') {
        fChangeKeyboardBack(query, person);
        return;
      }

      let regionsArr = Object.keys(strings(person.language).locations);
      let targetRegion = regionsArr.filter(item => {
        return strings(person.language).locations[item].hasOwnProperty(
          query.data.slice(13)
        );
      });
      targetRegion = targetRegion[0];

      let location = query.data.slice(13);

      person.locations[targetRegion][location] = !person.locations[
        targetRegion
      ][location];
      person.save().then(savedPerson => {
        fChangeKeyboard(query, savedPerson);
      });

      return;
    }
    return;
  });

  function fChangeKeyboard(query, person) {
    var msg = query.message;
    let regionsArr = Object.keys(strings(person.language).locations);

    let targetRegion = regionsArr.filter(item => {
      return strings(person.language).locations[item].hasOwnProperty(
        query.data.slice(13)
      );
    });
    targetRegion = targetRegion[0];
    newKeyboard = subKeyboard(targetRegion, person);

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

function fChangeKeyboardBack(query, person) {
  var msg = query.message;

  newKeyboard = editLocationsInlineKeyboard(person);

  var opts = {
    reply_markup: newKeyboard,
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    parse_mode: 'HTML'
  };

  let editLocationsMessage = strings(person.language).editLocationsMessage;

  bot.editMessageText(editLocationsMessage, opts).catch(error => {
    console.log(error);
  });
}

module.exports = subLocationButtonPressed;
