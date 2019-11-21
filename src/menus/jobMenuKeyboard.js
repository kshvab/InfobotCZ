const strings = require('../strings');

function jobMenuKeyboard(person) {
  let language = person.language;

  let subscribe = strings(language).jobMenuOptions.subscribe;
  const back = strings(language).jobMenuOptions.back;
  const publish = strings(language).jobMenuOptions.publish;
  const getLastjob = strings(language).jobMenuOptions.getLastjob;

  if (person.sections.job) subscribe = strings(language).checked + subscribe;
  else subscribe = strings(language).unChecked + subscribe;

  let keyboard;

  if (person.sections.job) {
    keyboard = [[subscribe], [getLastjob], [back, publish]];
  } else {
    keyboard = [[subscribe], [back, publish]];
  }

  return keyboard;
}

module.exports = jobMenuKeyboard;
