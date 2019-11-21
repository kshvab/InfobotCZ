const bot = require('../bot');
const mongoose = require('mongoose');
const dbUser = require('../db/models/user');
const dbTemporaryWork = require('../db/models/temporaryWork');
const fUserInitialization = require('./fUserInitialization');
const strings = require('../strings');

function fUserShowLastTemporaryWork(msg) {
  //console.log(msg);
  const chatId = msg.chat.id;
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;

      let queryCategorieArr = [];
      for (key in person.workCategories) {
        if (typeof person.workCategories[key] == 'boolean' && key != '$init')
          if (person.workCategories[key])
            queryCategorieArr.push(`{"categorie": "${key}"}`);
      }

      if (!queryCategorieArr.length) {
        sendNoItems('noCategoriesSelected');
        return 0;
      }

      let queryLocationArr = [];

      for (key in person.locations) {
        if (typeof person.locations[key] == 'object') {
          for (itemName in person.locations[key]) {
            if (
              typeof person.locations[key][itemName] == 'boolean' &&
              itemName != '$init'
            ) {
              if (person.locations[key][itemName])
                queryLocationArr.push(`{"location": "${itemName}"}`);
            }
          }
        }
      }
      //console.log(queryLocationArr);

      if (!queryLocationArr.length) {
        sendNoItems('noLocationsSelected');
        return 0;
      }

      let query = '{"$or" : [';
      //{$or : [{categorie: "services"}, {categorie: "administration"}], $or : [{location: "praha1"}, {location: "praha2"}]}
      for (let i = 0; i < queryCategorieArr.length; i++) {
        query += queryCategorieArr[i];
        if (i < queryCategorieArr.length - 1) query += ',';
      }
      query += '], "$or" : [';
      for (let i = 0; i < queryLocationArr.length; i++) {
        query += queryLocationArr[i];
        if (i < queryLocationArr.length - 1) query += ',';
      }
      query += ']}';

      //console.log(query);

      dbTemporaryWork.find(JSON.parse(query), function(err, dbTemporaryWork) {
        if (err) {
          console.log(err);
          return err;
        }

        if (!dbTemporaryWork.length) {
          sendNoItems('noRelevantItems');
          return 0;
        }

        for (let i = 0; i < dbTemporaryWork.length; i++) {
          bot
            .sendMessage(chatId, dbTemporaryWork[i].text, {
              parse_mode: 'HTML'
            })
            .then(() => {
              if (i == dbTemporaryWork.length - 1)
                fReportQuantitySent(dbTemporaryWork.length);
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
            strings(language).showLastTemporaryWorkStrings[
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
          strings(language).showLastTemporaryWorkStrings[sendNoItemsReason],
          {
            parse_mode: 'HTML'
          }
        );
      }
    }
  });
}

module.exports = fUserShowLastTemporaryWork;
