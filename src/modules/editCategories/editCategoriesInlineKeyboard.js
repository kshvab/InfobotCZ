const strings = require('../../strings');

function editCategoriesInlineKeyboard(person) {
  let lang = person.language;

  let administration;
  let manual;
  let services;
  let other;

  if (person.workCategories.administration) {
    administration =
      strings(lang).checked + strings(lang).jobCategories.administration;
  } else {
    administration =
      strings(lang).unChecked + strings(lang).jobCategories.administration;
  }

  if (person.workCategories.manual) {
    manual = strings(lang).checked + strings(lang).jobCategories.manual;
  } else {
    manual = strings(lang).unChecked + strings(lang).jobCategories.manual;
  }

  if (person.workCategories.services) {
    services = strings(lang).checked + strings(lang).jobCategories.services;
  } else {
    services = strings(lang).unChecked + strings(lang).jobCategories.services;
  }

  if (person.workCategories.other) {
    other = strings(lang).checked + strings(lang).jobCategories.other;
  } else {
    other = strings(lang).unChecked + strings(lang).jobCategories.other;
  }

  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        { text: administration, callback_data: 'work_categorie_administration' }
      ],
      [{ text: manual, callback_data: 'work_categorie_manual' }],
      [{ text: services, callback_data: 'work_categorie_services' }],
      [{ text: other, callback_data: 'work_categorie_other' }],
      [
        {
          text: strings(lang).back,
          callback_data: 'work_categorie_back'
        }
      ]
    ]
  });

  return keyboardStr;
}

module.exports = editCategoriesInlineKeyboard;
