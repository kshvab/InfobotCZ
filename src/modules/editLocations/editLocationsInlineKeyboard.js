const strings = require('../../strings');

function editLocationsInlineKeyboard(person) {
  let lang = person.language;

  let praha = buttonPreText('praha') + strings(lang).locations.praha.krayName;
  let stredoceskyKraj =
    buttonPreText('stredoceskyKraj') +
    strings(lang).locations.stredoceskyKraj.krayName;
  let jihoceskyKraj =
    buttonPreText('jihoceskyKraj') +
    strings(lang).locations.jihoceskyKraj.krayName;
  let plzenskyKraj =
    buttonPreText('plzenskyKraj') +
    strings(lang).locations.plzenskyKraj.krayName;
  let karlovarskyKraj =
    buttonPreText('karlovarskyKraj') +
    strings(lang).locations.karlovarskyKraj.krayName;
  let usteckyKraj =
    buttonPreText('usteckyKraj') + strings(lang).locations.usteckyKraj.krayName;
  let libereckyKraj =
    buttonPreText('libereckyKraj') +
    strings(lang).locations.libereckyKraj.krayName;
  let kralovehradeckyKraj =
    buttonPreText('kralovehradeckyKraj') +
    strings(lang).locations.kralovehradeckyKraj.krayName;
  let pardubickyKraj =
    buttonPreText('pardubickyKraj') +
    strings(lang).locations.pardubickyKraj.krayName;
  let vysocina =
    buttonPreText('vysocina') + strings(lang).locations.vysocina.krayName;
  let jihomoravskyKraj =
    buttonPreText('jihomoravskyKraj') +
    strings(lang).locations.jihomoravskyKraj.krayName;
  let olomouckyKraj =
    buttonPreText('olomouckyKraj') +
    strings(lang).locations.olomouckyKraj.krayName;
  let moravskoslezskyKraj =
    buttonPreText('moravskoslezskyKraj') +
    strings(lang).locations.moravskoslezskyKraj.krayName;

  let zlinskyKraj =
    buttonPreText('zlinskyKraj') + strings(lang).locations.zlinskyKraj.krayName;

  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        { text: praha, callback_data: 'location_praha' },
        { text: stredoceskyKraj, callback_data: 'location_stredoceskyKraj' }
      ],
      [
        { text: jihoceskyKraj, callback_data: 'location_jihoceskyKraj' },
        { text: plzenskyKraj, callback_data: 'location_plzenskyKraj' }
      ],
      [
        { text: karlovarskyKraj, callback_data: 'location_karlovarskyKraj' },
        { text: usteckyKraj, callback_data: 'location_usteckyKraj' }
      ],
      [
        { text: libereckyKraj, callback_data: 'location_libereckyKraj' },
        {
          text: kralovehradeckyKraj,
          callback_data: 'location_kralovehradeckyKraj'
        }
      ],
      [
        { text: pardubickyKraj, callback_data: 'location_pardubickyKraj' },
        { text: vysocina, callback_data: 'location_vysocina' }
      ],
      [
        { text: jihomoravskyKraj, callback_data: 'location_jihomoravskyKraj' },
        { text: olomouckyKraj, callback_data: 'location_olomouckyKraj' }
      ],
      [
        {
          text: moravskoslezskyKraj,
          callback_data: 'location_moravskoslezskyKraj'
        },
        { text: zlinskyKraj, callback_data: 'location_zlinskyKraj' }
      ],
      [
        {
          text: strings(lang).back,
          callback_data: 'location_back'
        }
      ]
    ]
  });

  function buttonPreText(loc) {
    //console.log(loc);

    // person.locations[loc],
    let allCount = 0;
    let trueCount = 0;
    let falseCount = 0;
    for (key in strings(lang).locations[loc]) {
      if (key != 'krayName') {
        allCount++;
        if (person.locations[loc][key]) trueCount++;
        else falseCount++;
      }
    }

    if (!trueCount) return '';
    if (allCount == trueCount) return '🔔 ';
    return `🔔 (${trueCount}/${allCount}) `;
  }

  return keyboardStr;
}

module.exports = editLocationsInlineKeyboard;
