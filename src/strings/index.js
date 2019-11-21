const english = require('./localizations/english');
const russian = require('./localizations/russian');
const сzech = require('./localizations/сzech');
const ukrainian = require('./localizations/ukrainian');

function locale(language) {
  //return ukrainian;
  if (language == 'EN') return english;
  if (language == 'RU') return russian;
  if (language == 'UA') return ukrainian;
  else return сzech;
}

/** Exports */
module.exports = locale;
