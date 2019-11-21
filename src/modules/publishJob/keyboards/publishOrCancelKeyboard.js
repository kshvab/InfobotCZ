const strings = require('../../../strings');

function publishOrCancelKeyboard(lang) {
  let keyboardStr = JSON.stringify({
    inline_keyboard: [
      [
        {
          text: strings(lang).publish,
          callback_data: 'publish_job_publish'
        },
        {
          text: strings(lang).cancel,
          callback_data: 'publish_job_cancel'
        }
      ]
    ]
  });

  return keyboardStr;
}

module.exports = publishOrCancelKeyboard;
