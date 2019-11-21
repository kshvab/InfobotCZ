const dbUser = require('../../src/db/models/user');
const bot = require('../../src/bot');
const { locations } = require('../../src/strings/localizations/ukrainian');

function kray(okres) {
  for (key in locations) {
    if (locations[key].hasOwnProperty(okres)) return key;
  }
}

function itemSendToUsers(item) {
  return new Promise(function(resolve, reject) {
    let locationQuery =
      'locations.' + kray(item.location) + '.' + item.location;

    let categorieQuery = 'workCategories.' + item.categorie;

    let sectionQuery = 'sections.temporaryWork';

    let mainQuery = JSON.parse(
      '{ "' +
        locationQuery +
        '": true, "' +
        categorieQuery +
        '": true, "' +
        sectionQuery +
        '": true}'
    );

    dbUser.find(mainQuery, { telegramUserId: 1, firstName: 1 }, function(
      err,
      usersFromDb
    ) {
      //console.log(usersFromDb);
      if (err) reject(err);
      if (!usersFromDb.length) resolve(null);
      else {
        for (let i = 0; i < usersFromDb.length; i++) {
          bot
            .sendMessage(usersFromDb[i].telegramUserId, item.text, {
              parse_mode: 'HTML'
            })
            .catch(error => {
              console.log(error);
            });
        }
        resolve(usersFromDb.length);
      }
    });
  });
}

module.exports = itemSendToUsers;
