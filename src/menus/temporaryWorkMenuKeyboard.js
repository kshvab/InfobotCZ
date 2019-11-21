const strings = require('../strings');

function temporaryWorkMenuKeyboard(person) {
  let language = person.language;

  let subscribe = strings(language).temporaryWorkMenuOptions.subscribe;
  const editCategories = strings(language).temporaryWorkMenuOptions
    .editCategories;
  const editLocations = strings(language).temporaryWorkMenuOptions
    .editLocations;
  const back = strings(language).temporaryWorkMenuOptions.back;
  const publish = strings(language).temporaryWorkMenuOptions.publish;
  const getLastTemporaryWork = strings(language).temporaryWorkMenuOptions
    .getLastTemporaryWork;

  if (person.sections.temporaryWork)
    subscribe = strings(language).checked + subscribe;
  else subscribe = strings(language).unChecked + subscribe;

  let keyboard;

  if (person.sections.temporaryWork) {
    keyboard = [
      [subscribe],
      [getLastTemporaryWork],
      [editCategories, editLocations],
      [
        back,
        publish
        /*
        {
          text: publish,
          request_contact: true
        }
        */
      ]
    ];
  } else {
    keyboard = [
      [subscribe],
      [
        back,
        publish
        /*
        {
          text: publish,
          request_contact: true
        }
        */
      ]
    ];
  }

  return keyboard;
}

module.exports = temporaryWorkMenuKeyboard;
