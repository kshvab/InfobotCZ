const strings = require('../strings');

function transportationMenuKeyboard(person) {
  let language = person.language;

  let subscribe = strings(language).transportationMenuOptions.subscribe;
  const back = strings(language).transportationMenuOptions.back;
  const publish = strings(language).transportationMenuOptions.publish;
  const getLastTransportation = strings(language).transportationMenuOptions
    .getLastTransportation;

  if (person.sections.transportation)
    subscribe = strings(language).checked + subscribe;
  else subscribe = strings(language).unChecked + subscribe;

  let keyboard;

  if (person.sections.transportation) {
    keyboard = [[subscribe], [getLastTransportation], [back, publish]];
  } else {
    keyboard = [[subscribe], [back, publish]];
  }

  return keyboard;
}

module.exports = transportationMenuKeyboard;
