const mongoose = require('mongoose');
const dbTransportation = require('../../../db/models/transportation');
const dbDraft = require('../../../db/models/draft');
const fUserShowTransportationMenu = require('../../../logicFunctions/fUserShowTransportationMenu');
const bot = require('../../../bot');
const p_itemSendToUsers = require('./p_itemSendToUsers');
const strings = require('../../../strings');

function transportationPublishOrCancelStep(query) {
  //console.log(query);
  let chatId = query.message.chat.id;
  let messageId = query.message.message_id;

  let telegramUserId = query.from.id;

  dbDraft.findOne(
    { telegramUserId: telegramUserId, section: 'transportation' },
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
          fUserShowTransportationMenu(query);
          return 0;
        }

        let language = draft.language;

        if (query.data != 'publish_transportation_publish') {
          // Якщо відміна на останньому етапі

          bot.deleteMessage(chatId, messageId);
          fUserShowTransportationMenu(query);
          return 0;
        }

        //---Зберігаємо у основну базу оголошень на 24 години
        let itemToDb = {};
        itemToDb._id = new mongoose.Types.ObjectId();
        itemToDb.source = 'fromUser';
        itemToDb.text = draft.preparedText;
        let newTransportation = new dbTransportation(itemToDb);

        newTransportation.save(function(err, result) {
          if (err) console.log(err);

          //console.log('NEW dbTransportation Added!');
        });

        //---Робимо розсилку цього оголошення

        p_itemSendToUsers(itemToDb).then(itemSendToUsersRes => {
          //console.log(itemSendToUsersRes);

          //---Повідомляємо, що оголошення опубліковано успішно
          let successMessage = strings(language)
            .transportationSuccessMessagePart1;
          successMessage += strings(language).transportationSuccessMessagePart2;

          //'Ваше оголошення збережене на 48 годин.\nЙого уже отримали ' + itemSendToUsersRes + ' користувачів.';

          //---і убрать клаву .....
          bot.deleteMessage(chatId, messageId);

          bot
            .sendMessage(chatId, successMessage, {
              parse_mode: 'HTML'
            })
            .then(() => {
              fUserShowTransportationMenu(query);
            });

          // ADMIN NOTIFICATION
          bot.sendMessage(
            '455174812',
            '🎾 🚌 NEW TRANSPORTATION! \n\n' +
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
          section: 'transportation'
        });
      }
    }
  );
}
module.exports = transportationPublishOrCancelStep;
