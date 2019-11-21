const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const dbTransportation = require('../db/models/transportation');
const fUserInitialization = require('./fUserInitialization');
const strings = require('../strings');

function fUserShowLastTransportation(msg) {
  //console.log(msg);
  const chatId = msg.chat.id;
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;

      dbTransportation.find({}, function(err, transportationFromDb) {
        if (err) {
          console.log(err);
          return err;
        }

        if (!transportationFromDb.length) {
          sendNoItems('noRelevantItems');
          return 0;
        }

        for (let i = 0; i < transportationFromDb.length; i++) {
          bot
            .sendMessage(chatId, transportationFromDb[i].text, {
              parse_mode: 'HTML'
            })
            .then(() => {
              if (i == transportationFromDb.length - 1)
                fReportQuantitySent(transportationFromDb.length);
            })
            .catch(error => {
              console.log(error);
            });
        }
      });

      function fReportQuantitySent(quantity) {
        bot.sendMessage(
          chatId,
          quantity +
            strings(language).showLastTransportationStrings[
              'reportQuantitySent'
            ],
          {
            parse_mode: 'HTML'
          }
        );
      }

      function sendNoItems(sendNoItemsReason) {
        bot.sendMessage(
          chatId,
          strings(language).showLastTransportationStrings[sendNoItemsReason],
          {
            parse_mode: 'HTML'
          }
        );
      }
    }
  });
}

module.exports = fUserShowLastTransportation;
