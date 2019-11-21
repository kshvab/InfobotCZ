let bot = require('../../src/bot');
let CronJob = require('cron').CronJob;

let fajnBrigadyUrls = require('./helpers/fajnBrigadyUrls');
let pageListParser = require('./pageListParser');
let pageItemParser = require('./pageItemParser');
let itemSaveToDb = require('./itemSaveToDb');
let itemSendToUsers = require('./itemSendToUsers');

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function fajnBrigadyParser() {
  var job = new CronJob({
    cronTime: '0 6 * * *',
    onTick: function() {
      console.log('Cron');
      fMainParser();
    },
    start: true,
    timeZone: 'Europe/Kiev',
    runOnInit: false
  });

  //job.start(); // вже не треба, бо стоїть start: true,
}
//fMainParser();

function fMainParser() {
  let locationsCounter = 0;

  let newItemsCounterInfo = 0;
  let newMessagesCounterInfo = 0;

  oneLocationParse(locationsCounter);

  function oneLocationParse(index) {
    let delay = randomInteger(420000, 990000);

    adminReport(
      `⏰ ===> Start parsing ${
        fajnBrigadyUrls[index].name
      } (${index}/85) after ${delay /
        1000 /
        60}\n📃: ${newItemsCounterInfo}\n📩: ${newMessagesCounterInfo}`
    );

    setTimeout(function() {
      adminReport(`👍 ===> Start parsing ${fajnBrigadyUrls[index].name}`);
      console.log(`===> Start parsing ${fajnBrigadyUrls[index].name}`);
      pageListParser(fajnBrigadyUrls[index].name, fajnBrigadyUrls[index].url) //returns arr of page items links
        .then(([location, listUrlsArr]) => {
          let itemsCounter = 0;

          oneItemParse(itemsCounter);

          function oneItemParse(index) {
            pageItemParser([location, listUrlsArr[index]]).then(item => {
              if (!item) {
                itemsCounter++;
                if (itemsCounter < listUrlsArr.length)
                  oneItemParse(itemsCounter);
                else {
                  //FINISH PARSING listUrlsArr
                  locationsCounter++;
                  if (locationsCounter < fajnBrigadyUrls.length)
                    oneLocationParse(locationsCounter);
                  else {
                    console.log('===> All locations Parsed!');
                    adminReport();
                  }
                  return 0;
                }
                return 0;
              } else {
                itemSaveToDb(item).then(itemSaveToDbRes => {
                  //якшо зберігся, то буде itemSaveToDbRes true, якшо вже був у базі,тобуде null
                  if (itemSaveToDbRes) {
                    newItemsCounterInfo++;

                    itemSendToUsers(item).then(itemSendToUsersRes => {
                      newMessagesCounterInfo += +itemSendToUsersRes;
                      //console.log(itemSendToUsersRes);

                      itemsCounter++;
                      if (itemsCounter < listUrlsArr.length)
                        oneItemParse(itemsCounter);
                      else {
                        locationsCounter++;
                        if (locationsCounter < fajnBrigadyUrls.length)
                          oneLocationParse(locationsCounter);
                        else {
                          console.log('===> All locations Parsed!');
                          adminReport();
                        }
                        return 0;
                      }
                    });
                  } else {
                    itemsCounter++;
                    if (itemsCounter < listUrlsArr.length)
                      oneItemParse(itemsCounter);
                    else {
                      locationsCounter++;
                      if (locationsCounter < fajnBrigadyUrls.length)
                        oneLocationParse(locationsCounter);
                      else {
                        console.log('===> All locations Parsed!');
                        adminReport();
                      }
                      return 0;
                    }
                  }
                });
              }
            });
          }
        });
    }, delay);
  }

  let finishText = `
  🎾 Парсинг.
  📃: ${newItemsCounterInfo}
  📩: ${newMessagesCounterInfo}
  `;

  function adminReport(text = finishText) {
    bot.sendMessage('455174812', text, {
      parse_mode: 'HTML'
    });
  }
}

module.exports = fajnBrigadyParser;
