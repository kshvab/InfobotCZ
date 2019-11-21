const dbUser = require('../../../db/models/user');
const bot = require('../../../bot');
const { locations } = require('../../../strings/localizations/ukrainian');

function p_itemSendToUsers(item) {
  return new Promise(function(resolve, reject) {
    let sectionQuery = 'sections.job';

    let mainQuery = JSON.parse('{ "' + sectionQuery + '": true}');

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

module.exports = p_itemSendToUsers;
