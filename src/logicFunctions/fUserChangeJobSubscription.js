const bot = require('../bot');
const dbUser = require('../db/models/user');
const strings = require('../strings');
const fUserInitialization = require('./fUserInitialization');
const jobMenuKeyboard = require('../menus/jobMenuKeyboard');

function fUserChangeJobSubscription(msg) {
  let userId = msg.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      person.sections.job = !person.sections.job;
      person
        .save()
        .then(() => {
          let jobMenuMessage;

          if (person.sections.job)
            jobMenuMessage = strings(person.language).jobSubscribeMessage;
          else jobMenuMessage = strings(person.language).jobUnSubscribeMessage;

          const opts = {
            reply_markup: {
              keyboard: jobMenuKeyboard(person),
              resize_keyboard: true,
              one_time_keyboard: false
            },
            parse_mode: 'HTML'
          };

          bot.sendMessage(userId, jobMenuMessage, opts);
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
}

module.exports = fUserChangeJobSubscription;
