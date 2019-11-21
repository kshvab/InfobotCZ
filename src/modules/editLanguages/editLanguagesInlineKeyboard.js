const strings = require('../../strings');

function editLanguagesInlineKeyboard(person) {
  let lang = person.language;

  let checked = strings(lang).checked;

  let languageUa = strings(lang).languages.languageUa;
  let languageCz = strings(lang).languages.languageCz;
  let languageEn = strings(lang).languages.languageEn;
  let languageRu = strings(lang).languages.languageRu;

  switch (lang) {
    case 'CZ':
      languageCz = checked + languageCz;
      break;
    case 'EN':
      languageEn = checked + languageEn;
      break;
    case 'RU':
      languageRu = checked + languageRu;
      break;
    default:
      languageUa = checked + languageUa;
  }

  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        { text: languageUa, callback_data: 'language_languageUa' },
        { text: languageCz, callback_data: 'language_languageCz' }
      ],

      [
        { text: languageEn, callback_data: 'language_languageEn' },
        { text: languageRu, callback_data: 'language_languageRu' }
      ],

      [
        {
          text: strings(lang).back,
          callback_data: 'language_back'
        }
      ]
    ]
  });

  return keyboardStr;
}

module.exports = editLanguagesInlineKeyboard;
