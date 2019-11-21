const bot = require('../../bot');
const mongoose = require('mongoose');
const strings = require('../../strings');
const fUserInitialization = require('../../logicFunctions/fUserInitialization');
const dbUser = require('../../db/models/user');
const dbDraft = require('../../db/models/draft');
const publishOrCancelKeyboard = require('./keyboards/publishOrCancelKeyboard');

// ----- Ця функція викликається, де параметром є контакт користувача
function publishTransportation(msg) {
  let chatId = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;

  bot
    .deleteMessage(
      msg.reply_to_message.chat.id,
      msg.reply_to_message.message_id
    )
    .catch(error => {
      console.log(error);
    });
  //console.log(msg);

  dbUser.findOne({ telegramUserId: chatId }, function(err, person) {
    if (err) {
      console.log(err);
      return 0;
    }

    if (!person) {
      fUserInitialization(msg);
    } else {
      let telegramUserId = person.telegramUserId;
      let user_id = person._id;
      let language = person.language;
      let firstName = person.firstName;
      let phoneNumber = msg.contact.phone_number;

      dbDraft.findOne({ user_id: user_id, section: 'transportation' }, function(
        err,
        draft
      ) {
        if (err) {
          console.log(err);
          return 0;
        } else if (!draft) {
          fInitialDraftSave();
        } else {
          fTransportationStep1();
        }
      });

      function fInitialDraftSave() {
        let newDraft = new dbDraft({
          _id: new mongoose.Types.ObjectId(),
          telegramUserId,
          user_id,
          firstName,
          language,
          phoneNumber,
          section: 'transportation'
        });

        newDraft.save(function(err) {
          if (err) {
            console.log(err);
            return 0;
          } else {
            fTransportationStep1();
          }
        });
      }

      function fTransportationStep1() {
        let transportationStep1Text = strings(language).transportationStep1Text;

        bot.sendMessage(chatId, transportationStep1Text, {
          parse_mode: 'HTML'
        });

        bot.once('message', msgWithTitle => {
          //взяти і зберегти заголовок

          dbDraft.findOne(
            { user_id: user_id, section: 'transportation' },
            function(err, draft) {
              if (err) {
                console.log(err);
                return 0;
              } else if (!draft) {
                fInitialDraftSave();
              } else {
                draft.title = msgWithTitle.text;
                draft.save().then(() => {
                  //Видаляємо попереднє
                  //bot.deleteMessage(chatId, messageId);

                  // і запитуємо на введення тексту оголошення
                  let transportationStep2Text = strings(language)
                    .transportationStep2Text;

                  bot.sendMessage(chatId, transportationStep2Text, {
                    parse_mode: 'HTML'
                  });

                  bot.once('message', msg => {
                    draft.text = msg.text;

                    let preparedText = '🚌 ';
                    preparedText += `<b>${draft.title}</b>\n\n`;
                    preparedText += strings(language).transportationPreparedText
                      .draftText;
                    preparedText += draft.text;
                    preparedText += strings(language).transportationPreparedText
                      .draftFirstName;
                    preparedText += draft.firstName;
                    preparedText += strings(language).transportationPreparedText
                      .draftPhoneNumber;
                    preparedText += draft.phoneNumber;

                    draft.preparedText = preparedText;

                    draft.save().then(() => {
                      let transportationStep3Text = strings(language)
                        .transportationStep3Text;

                      transportationStep3Text +=
                        draft.preparedText + '\n➖➖➖➖➖➖➖➖➖➖➖';

                      var keyboardStr = publishOrCancelKeyboard(language);

                      bot.sendMessage(msg.chat.id, transportationStep3Text, {
                        reply_markup: keyboardStr,
                        parse_mode: 'HTML'
                      });
                    });
                  });
                });
              }
            }
          );
        });
      }
    }
  });
}
module.exports = publishTransportation;
