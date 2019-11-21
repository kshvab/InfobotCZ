const bot = require('../bot');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const temporaryWorkMenuKeyboard = require('../menus/temporaryWorkMenuKeyboard');

function fUserChangeTemporaryWorkSubscription(msg) {
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      person.sections.temporaryWork = !person.sections.temporaryWork;
      person
        .save()
        .then(() => {
          let temporaryWorkMenuMessage;

          if (person.sections.temporaryWork)
            temporaryWorkMenuMessage = strings(person.language)
              .temporaryWorkSubscribeMessage;
          else
            temporaryWorkMenuMessage = strings(person.language)
              .temporaryWorkUnSubscribeMessage;

          const opts = {
            reply_markup: {
              keyboard: temporaryWorkMenuKeyboard(person),
              resize_keyboard: true,
              one_time_keyboard: false
            },
            parse_mode: 'HTML'
          };

          bot.sendMessage(userId, temporaryWorkMenuMessage, opts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
}

module.exports = fUserChangeTemporaryWorkSubscription;
