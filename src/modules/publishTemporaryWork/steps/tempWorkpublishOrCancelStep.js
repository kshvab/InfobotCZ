const mongoose = require('mongoose');
const dbTemporaryWork = require('../../../db/models/temporaryWork');
const dbDraft = require('../../../db/models/draft');
const fUserShowTemporaryWorkMenu = require('../../../logicFunctions/fUserShowTemporaryWorkMenu');
const bot = require('../../../bot');
const itemSendToUsers = require('../../../../parser/fajnBrigadyParser/itemSendToUsers');
const strings = require('../../../strings');

function tempWorkpublishOrCancelStep(query) {
  //console.log(query);
  let chatId = query.message.chat.id;
  let messageId = query.message.message_id;

  let telegramUserId = query.from.id;

  dbDraft.findOne(
    { telegramUserId: telegramUserId, section: 'temporaryWork' },
    function(err, draft) {
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
          fUserShowTemporaryWorkMenu(query);
          return 0;
        }

        let language = draft.language;

        if (query.data != 'publish_tempwork_publish') {
          // Якщо відміна на останньому етапі

          bot.deleteMessage(chatId, messageId);
          fUserShowTemporaryWorkMenu(query);
          return 0;
        }

        //---Зберігаємо у основну базу оголошень на 24 години
        let itemToDb = {};
        itemToDb._id = new mongoose.Types.ObjectId();
        itemToDb.source = 'fromUser';
        itemToDb.categorie = draft.categorie;
        itemToDb.location = draft.location;
        itemToDb.text = draft.preparedText;
        let newTemporaryWork = new dbTemporaryWork(itemToDb);

        newTemporaryWork.save(function(err, result) {
          if (err) console.log(err);

          //console.log('NEW dbTemporaryWork Added!');
        });

        //---Робимо розсилку цього оголошення

        itemSendToUsers(itemToDb).then(itemSendToUsersRes => {
          //console.log(itemSendToUsersRes);

          //---Повідомляємо, що оголошення опубліковано успішно
          let successMessage = strings(language)
            .temporaryWorkSuccessMessagePart1;
          successMessage += strings(language).temporaryWorkSuccessMessagePart2;

          //'Ваше оголошення збережене на 48 годин.\nЙого уже отримали ' + itemSendToUsersRes + ' користувачів.';

          //---і убрать клаву .....
          bot.deleteMessage(chatId, messageId);
          bot
            .sendMessage(chatId, successMessage, {
              parse_mode: 'HTML'
            })
            .then(() => {
              fUserShowTemporaryWorkMenu(query);
            });

          // ADMIN NOTIFICATION
          bot.sendMessage(
            '455174812',
            '🎾 🧰 NEW ФУШКА! \n\n' +
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
          section: 'temporaryWork'
        });
      }
    }
  );
}
module.exports = tempWorkpublishOrCancelStep;
