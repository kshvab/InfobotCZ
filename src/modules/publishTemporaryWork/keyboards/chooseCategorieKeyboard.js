const strings = require('../../../strings');

function chooseCategorieKeyboard(lang) {
  let administration = strings(lang).jobCategories.administration;
  let manual = strings(lang).jobCategories.manual;
  let services = strings(lang).jobCategories.services;
  let other = strings(lang).jobCategories.other;

  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        {
          text: administration,
          callback_data: 'choose_publ_tempwork_categorie_administration'
        }
      ],
      [
        { text: manual, callback_data: 'choose_publ_tempwork_categorie_manual' }
      ],
      [
        {
          text: services,
          callback_data: 'choose_publ_tempwork_categorie_services'
        }
      ],
      [{ text: other, callback_data: 'choose_publ_tempwork_categorie_other' }],
      [
        {
          text: strings(lang).cancel,
          callback_data: 'choose_publ_tempwork_categorie_cancel'
        }
      ]
    ]
  });

  return keyboardStr;
}

module.exports = chooseCategorieKeyboard;
