const mongoose = require('mongoose');
const dbJob = require('../../../db/models/job');
const dbDraft = require('../../../db/models/draft');
const fUserShowJobMenu = require('../../../logicFunctions/fUserShowJobMenu');
const bot = require('../../../bot');
const p_itemSendToUsers = require('./p_itemSendToUsers');
const strings = require('../../../strings');

function jobPublishOrCancelStep(query) {
  //console.log(query);
  let chatId = query.message.chat.id;
  let messageId = query.message.message_id;

  let telegramUserId = query.from.id;

  dbDraft.findOne({ telegramUserId: telegramUserId, section: 'job' }, function(
    err,
    draft
  ) {
    if (err) {
      console.log(err);
      return 0;
    } else {
      if (!draft) {
        //    оч маловероятно
        //    если вдруг Драфта не существует
        //    показываем меню фушек
        let chatId = query.message.chat.id;
        let messageId = query.message.message_id;
        bot.deleteMessage(chatId, messageId);
        fUserShowJobMenu(query);
        return 0;
      }

      let language = draft.language;

      if (query.data != 'publish_job_publish') {
        // Якщо відміна на останньому етапі

        bot.deleteMessage(chatId, messageId);
        fUserShowJobMenu(query);
        return 0;
      }

      //---Зберігаємо у основну базу оголошень на 24 години
      let itemToDb = {};
      itemToDb._id = new mongoose.Types.ObjectId();
      itemToDb.source = 'fromUser';
      itemToDb.text = draft.preparedText;
      let newJob = new dbJob(itemToDb);

      newJob.save(function(err, result) {
        if (err) console.log(err);

        //console.log('NEW dbJob Added!');
      });

      //---Робимо розсилку цього оголошення

      p_itemSendToUsers(itemToDb).then(itemSendToUsersRes => {
        //console.log(itemSendToUsersRes);

        //---Повідомляємо, що оголошення опубліковано успішно
        let successMessage = strings(language).jobSuccessMessagePart1;
        successMessage += strings(language).jobSuccessMessagePart2;

        //'Ваше оголошення збережене на 48 годин.\nЙого уже отримали ' + itemSendToUsersRes + ' користувачів.';

        //---і убрать клаву .....
        bot.deleteMessage(chatId, messageId);

        bot
          .sendMessage(chatId, successMessage, {
            parse_mode: 'HTML'
          })
          .then(() => {
            fUserShowJobMenu(query);
          });

        // ADMIN NOTIFICATION
        bot.sendMessage(
          '455174812',
          '🎾 🧳 NEW JOB! \n\n' +
            itemToDb.text +
            '\n\n📩 ' +
            itemSendToUsersRes,
          {
            parse_mode: 'HTML'
          }
        );
      });

      //---Видаляємо драфт
      dbDraft.remove({
        telegramUserId: telegramUserId,
        section: 'job'
      });
    }
  });
}
module.exports = jobPublishOrCancelStep;
