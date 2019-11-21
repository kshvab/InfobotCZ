const strings = require('../strings');

function fRegExpButton(menuName, buttonName) {
  let langArr = ['EN', 'RU', 'CZ', 'UA'];
  let str = '';

  for (let i = 0; i < langArr.length; i++) {
    str += strings(langArr[i])[menuName + 'Options'][buttonName];
    if (i < langArr.length - 1) str += '|';
  }

  return new RegExp(str);
}

module.exports = fRegExpButton;
