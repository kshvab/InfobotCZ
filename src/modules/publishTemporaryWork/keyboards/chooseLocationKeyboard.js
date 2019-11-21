const strings = require('../../../strings');

function chooseLocation(lang) {
  let praha = strings(lang).locations.praha.krayName;
  let stredoceskyKraj = strings(lang).locations.stredoceskyKraj.krayName;
  let jihoceskyKraj = strings(lang).locations.jihoceskyKraj.krayName;
  let plzenskyKraj = strings(lang).locations.plzenskyKraj.krayName;
  let karlovarskyKraj = strings(lang).locations.karlovarskyKraj.krayName;
  let usteckyKraj = strings(lang).locations.usteckyKraj.krayName;
  let libereckyKraj = strings(lang).locations.libereckyKraj.krayName;
  let kralovehradeckyKraj = strings(lang).locations.kralovehradeckyKraj
    .krayName;
  let pardubickyKraj = strings(lang).locations.pardubickyKraj.krayName;
  let vysocina = strings(lang).locations.vysocina.krayName;
  let jihomoravskyKraj = strings(lang).locations.jihomoravskyKraj.krayName;
  let olomouckyKraj = strings(lang).locations.olomouckyKraj.krayName;
  let moravskoslezskyKraj = strings(lang).locations.moravskoslezskyKraj
    .krayName;

  let zlinskyKraj = strings(lang).locations.zlinskyKraj.krayName;

  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        { text: praha, callback_data: 'choose_publ_tempwork_location_praha' },
        {
          text: stredoceskyKraj,
          callback_data: 'choose_publ_tempwork_location_stredoceskyKraj'
        }
      ],
      [
        {
          text: jihoceskyKraj,
          callback_data: 'choose_publ_tempwork_location_jihoceskyKraj'
        },
        {
          text: plzenskyKraj,
          callback_data: 'choose_publ_tempwork_location_plzenskyKraj'
        }
      ],
      [
        {
          text: karlovarskyKraj,
          callback_data: 'choose_publ_tempwork_location_karlovarskyKraj'
        },
        {
          text: usteckyKraj,
          callback_data: 'choose_publ_tempwork_location_usteckyKraj'
        }
      ],
      [
        {
          text: libereckyKraj,
          callback_data: 'choose_publ_tempwork_location_libereckyKraj'
        },
        {
          text: kralovehradeckyKraj,
          callback_data: 'choose_publ_tempwork_location_kralovehradeckyKraj'
        }
      ],
      [
        {
          text: pardubickyKraj,
          callback_data: 'choose_publ_tempwork_location_pardubickyKraj'
        },
        {
          text: vysocina,
          callback_data: 'choose_publ_tempwork_location_vysocina'
        }
      ],
      [
        {
          text: jihomoravskyKraj,
          callback_data: 'choose_publ_tempwork_location_jihomoravskyKraj'
        },
        {
          text: olomouckyKraj,
          callback_data: 'choose_publ_tempwork_location_olomouckyKraj'
        }
      ],
      [
        {
          text: moravskoslezskyKraj,
          callback_data: 'choose_publ_tempwork_location_moravskoslezskyKraj'
        },
        {
          text: zlinskyKraj,
          callback_data: 'choose_publ_tempwork_location_zlinskyKraj'
        }
      ],
      [
        {
          text: strings(lang).cancel,
          callback_data: 'choose_publ_tempwork_location_cancel'
        }
      ]
    ]
  });

  return keyboardStr;
}

module.exports = chooseLocation;
