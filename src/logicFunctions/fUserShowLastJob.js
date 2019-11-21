const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const dbJob = require('../db/models/job');
const fUserInitialization = require('./fUserInitialization');
const strings = require('../strings');

function fUserShowLastJob(msg) {
  //console.log(msg);
  const chatId = msg.chat.id;
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;

      dbJob.find({}, function(err, jobFromDb) {
        if (err) {
          console.log(err);
          return err;
        }

        if (!jobFromDb.length) {
          sendNoItems('noRelevantItems');
          return 0;
        }

        for (let i = 0; i < jobFromDb.length; i++) {
          bot
            .sendMessage(chatId, jobFromDb[i].text, {
              parse_mode: 'HTML'
            })
            .then(() => {
              if (i == jobFromDb.length - 1)
                fReportQuantitySent(jobFromDb.length);
            })
            .catch(error => {
              console.log(error);
            });
        }
      });

      function fReportQuantitySent(quantity) {
        bot.sendMessage(
          chatId,
          quantity + strings(language).showLastJobStrings['reportQuantitySent'],
          {
            parse_mode: 'HTML'
          }
        );
      }

      function sendNoItems(sendNoItemsReason) {
        bot.sendMessage(
          chatId,
          strings(language).showLastJobStrings[sendNoItemsReason],
          {
            parse_mode: 'HTML'
          }
        );
      }
    }
  });
}

module.exports = fUserShowLastJob;
