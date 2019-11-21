const bot = require('../bot');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const transportationMenuKeyboard = require('../menus/transportationMenuKeyboard');

function fUserChangeTransportationSubscription(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      person.sections.transportation = !person.sections.transportation;
      person
        .save()
        .then(() => {
          let transportationMenuMessage;

          if (person.sections.transportation)
            transportationMenuMessage = strings(person.language)
              .transportationSubscribeMessage;
          else
            transportationMenuMessage = strings(person.language)
              .transportationUnSubscribeMessage;

          const opts = {
            reply_markup: {
              keyboard: transportationMenuKeyboard(person),
              resize_keyboard: true,
              one_time_keyboard: false
            },
            parse_mode: 'HTML'
          };

          bot.sendMessage(userId, transportationMenuMessage, opts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
}

module.exports = fUserChangeTransportationSubscription;
