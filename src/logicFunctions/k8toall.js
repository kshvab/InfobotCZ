const bot = require('../bot');
const dbUser = require('../db/models/user');
const mainMenuKeyboard = require('../menus/mainMenuKeyboard');

function k8toall(msg) {
  //const chatId = msg.chat.id;
  let text = msg.text.slice(8);

  dbUser.find({}, function(err, users) {
    let counter = 0;
    let successfulMessages = 0;
    if (err) return handleError(err);

    if (!users || !users.length) {
      console.log('k8toall problems');
    } else {
      sendMsgToAll(0);
    }

    function sendMsgToAll(index) {
      counter++;

      if (counter < users.length) {
        const opts = {
          reply_markup: {
            keyboard: mainMenuKeyboard(users[index].language),
            resize_keyboard: true,
            one_time_keyboard: false
          },
          parse_mode: 'HTML'
        };

        bot
          .sendMessage(users[index].telegramUserId, text, opts)
          .then(() => {
            successfulMessages++;
            if (counter < users.length) sendMsgToAll(counter);
            if (counter == users.length - 1) fSendAdminReport();
          })
          .catch(error => {
            //console.log(error);
            if (counter < users.length) sendMsgToAll(counter);
            if (counter == users.length - 1) fSendAdminReport();
          });
      }
    }

    function fSendAdminReport() {
      let adminReportText = `Розсилка успішна. Повідомлення надсилалося ${
        users.length
      } користувачам, з них успішно: ${successfulMessages}`;
      bot.sendMessage('455174812', adminReportText, {
        parse_mode: 'HTML'
      });
    }
  });
}

module.exports = k8toall;
