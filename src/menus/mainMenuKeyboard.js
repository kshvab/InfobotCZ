const strings = require('../strings');

function mainMenuKeyboard(language) {
  let temporaryWork = strings(language).mainMenuOptions.temporaryWork;
  let job = strings(language).mainMenuOptions.job;
  let realty = strings(language).mainMenuOptions.realty;
  let transportation = strings(language).mainMenuOptions.transportation;
  let tickets = strings(language).mainMenuOptions.tickets;
  let myLanguage = strings(language).mainMenuOptions.myLanguage;
  let settingsReport = strings(language).mainMenuOptions.settingsReport;
  let help = strings(language).mainMenuOptions.help;

  let keyboard = [
    //[tickets],
    [temporaryWork, job, transportation],
    //[realty, transportation],

    [myLanguage, settingsReport, help]
  ];

  return keyboard;
}

module.exports = mainMenuKeyboard;
