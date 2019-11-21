const strings = require('../../strings');

function subKeyboard(targetRegion, person) {
  let lang = person.language;
  let targetRegionObj = strings(lang).locations[targetRegion];
  let targetRegionArr = Object.keys(targetRegionObj);

  targetRegionArr = targetRegionArr.filter(item => {
    return item != 'krayName';
  });

  let checked = strings(lang).checked;
  let unChecked = strings(lang).unChecked;

  let inline_keyboard = [];

  for (let i = 0; i < targetRegionArr.length; i += 2) {
    if (i < targetRegionArr.length - 1) {
      let textLeft = strings(lang).locations[targetRegion][targetRegionArr[i]];
      let textRight = strings(lang).locations[targetRegion][
        targetRegionArr[i + 1]
      ];

      if (person.locations[targetRegion][targetRegionArr[i]])
        textLeft = checked + textLeft;
      else textLeft = unChecked + textLeft;
      if (person.locations[targetRegion][targetRegionArr[i + 1]])
        textRight = checked + textRight;
      else textRight = unChecked + textRight;

      inline_keyboard.push([
        {
          text: textLeft,
          callback_data: `sub_location_${targetRegionArr[i]}`
        },
        {
          text: textRight,
          callback_data: `sub_location_${targetRegionArr[i + 1]}`
        }
      ]);
    } else {
      let textLeft = strings(lang).locations[targetRegion][targetRegionArr[i]];
      if (person.locations[targetRegion][targetRegionArr[i]])
        textLeft = checked + textLeft;
      else textLeft = unChecked + textLeft;
      inline_keyboard.push([
        {
          text: textLeft,
          callback_data: `sub_location_${targetRegionArr[i]}`
        }
      ]);
    }
  }

  inline_keyboard.push([
    {
      text: strings(lang).back,
      callback_data: 'sub_location_back'
    }
  ]);

  let keyboardStr = JSON.stringify({
    inline_keyboard
  });

  return keyboardStr;
}

module.exports = subKeyboard;
