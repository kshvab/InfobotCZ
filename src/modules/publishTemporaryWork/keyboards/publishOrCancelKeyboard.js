const strings = require('../../../strings');

function publishOrCancelKeyboard(lang) {
  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        {
          text: strings(lang).publish,
          callback_data: 'publish_tempwork_publish'
        },
        {
          text: strings(lang).cancel,
          callback_data: 'publish_tempwork_cancel'
        }
      ]
    ]
  });

  return keyboardStr;
}

module.exports = publishOrCancelKeyboard;
