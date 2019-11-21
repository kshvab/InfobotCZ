const bot = require('../bot');

const dbUser = require('../db/models/user');

const fUserInitialization = require('./fUserInitialization');
const strings = require('../strings');
const mainMenuKeyboard = require('../menus/mainMenuKeyboard');

function fUserShowMySettingsReport(msg) {
  const chatId = msg.chat.id;
  let userId = msg.from.id;
  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) {
      fUserInitialization(msg);
    } else {
      let language = person.language;

      let categorieArr = [];
      for (key in person.workCategories) {
        if (typeof person.workCategories[key] == 'boolean' && key != '$init')
          if (person.workCategories[key]) categorieArr.push(key);
      }

      let locationArr = [];
      for (key in person.locations) {
        if (typeof person.locations[key] == 'object') {
          let subLocArr = [];
          for (itemName in person.locations[key]) {
            if (
              typeof person.locations[key][itemName] == 'boolean' &&
              itemName != '$init'
            ) {
              if (person.locations[key][itemName])
                subLocArr.push('"' + itemName + '"');
            }
          }
          if (subLocArr.length) {
            let tempStr = `{ "krayName": "${key}", "krayArr": [${subLocArr}]}`;
            let strObj = JSON.parse(tempStr);
            locationArr.push(strObj);
          }
        }
      }

      let text =
        strings(language).showMySettingsReportStrings.firstPart + '\n\n';

      //------------ temporaryWork settings --------------
      if (person.sections.temporaryWork) {
        text +=
          strings(language).showMySettingsReportStrings
            .temporaryWorkSubscribed + '\n\n';

        if (!categorieArr.length) {
          text +=
            strings(language).showMySettingsReportStrings.noCategoriesSelected +
            '\n';
        } else {
          text +=
            strings(language).showMySettingsReportStrings
              .suchCategoriesSelected + '\n';
          categorieArr.forEach(item => {
            text +=
              '         ' +
              strings(language).showMySettingsReportStrings.checked +
              strings(language).jobCategories[item] +
              '\n';
          });
        }

        if (!locationArr.length) {
          text +=
            '\n' +
            strings(language).showMySettingsReportStrings.noLocationsSelected +
            '\n';
        } else {
          text +=
            '\n' +
            strings(language).showMySettingsReportStrings
              .suchLocationsSelected +
            '\n';
          locationArr.forEach(item => {
            text +=
              strings(language).showMySettingsReportStrings.bell +
              '<b>' +
              strings(language).locations[item.krayName].krayName +
              '</b>\n';
            item.krayArr.forEach(subItem => {
              text +=
                '         ' +
                strings(language).showMySettingsReportStrings.checked +
                strings(language).locations[item.krayName][subItem] +
                '\n';
            });
          });
        }
        text += '\n';
      } else {
        text +=
          strings(language).showMySettingsReportStrings
            .temporaryWorkUnSubscribed + '\n\n';
      }
      //------------ /temporaryWork settings --------------

      //----------------- /Job settings -------------------
      if (person.sections.job) {
        text +=
          strings(language).showMySettingsReportStrings.jobSubscribed + '\n\n';
      } else {
        text +=
          strings(language).showMySettingsReportStrings.jobUnSubscribed +
          '\n\n';
      }
      //----------------- /Job settings -------------------

      //----------------- /Transportation settings -------------------
      if (person.sections.transportation) {
        text +=
          strings(language).showMySettingsReportStrings
            .transportationSubscribed + '\n\n';
      } else {
        text +=
          strings(language).showMySettingsReportStrings
            .transportationUnSubscribed + '\n\n';
      }
      //----------------- /Transportation settings -------------------

      const opts = {
        reply_markup: {
          keyboard: mainMenuKeyboard(language),
          resize_keyboard: true,
          one_time_keyboard: false
        },
        parse_mode: 'HTML'
      };
      bot.sendMessage(chatId, text, opts).catch(error => {
        console.log(error);
      });
    }
  });
}

module.exports = fUserShowMySettingsReport;
