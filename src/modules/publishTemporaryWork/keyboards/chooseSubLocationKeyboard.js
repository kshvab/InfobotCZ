const strings = require('../../../strings');

function chooseSubLocationKeyboard(targetRegion, lang) {
  let targetRegionObj = strings(lang).locations[targetRegion];
  let targetRegionArr = Object.keys(targetRegionObj);

  targetRegionArr = targetRegionArr.filter(item => {
    return item != 'krayName';
  });

  let inline_keyboard = [];

  for (let i = 0; i < targetRegionArr.length; i += 2) {
    if (i < targetRegionArr.length - 1) {
      let textLeft = strings(lang).locations[targetRegion][targetRegionArr[i]];
      let textRight = strings(lang).locations[targetRegion][
        targetRegionArr[i + 1]
      ];

      inline_keyboard.push([
        {
          text: textLeft,
          callback_data: `choose_publ_tempwork_sub_location_${
            targetRegionArr[i]
          }`
        },
        {
          text: textRight,
          callback_data: `choose_publ_tempwork_sub_location_${
            targetRegionArr[i + 1]
          }`
        }
      ]);
    } else {
      let textLeft = strings(lang).locations[targetRegion][targetRegionArr[i]];
      inline_keyboard.push([
        {
          text: textLeft,
          callback_data: `choose_publ_tempwork_sub_location_${
            targetRegionArr[i]
          }`
        }
      ]);
    }
  }

  inline_keyboard.push([
    {
      text: strings(lang).cancel,
      callback_data: 'choose_publ_tempwork_sub_location_cancel'
    }
  ]);

  let keyboardStr = JSON.stringify({
    inline_keyboard
  });

  return keyboardStr;
}

module.exports = chooseSubLocationKeyboard;
