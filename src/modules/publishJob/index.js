const bot = require('../../bot');
const mongoose = require('mongoose');
const strings = require('../../strings');
const fUserInitialization = require('../../logicFunctions/fUserInitialization');
const dbUser = require('../../db/models/user');
const dbDraft = require('../../db/models/draft');
const publishOrCancelKeyboard = require('./keyboards/publishOrCancelKeyboard');

// ----- Ця функція викликається, де параметром є контакт користувача
function publishJob(msg) {
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

      dbDraft.findOne({ user_id: user_id, section: 'job' }, function(
        err,
        draft
      ) {
        if (err) {
          console.log(err);
          return 0;
        } else if (!draft) {
          fInitialDraftSave();
        } else {
          fJobStep1();
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
          section: 'job'
        });

        newDraft.save(function(err) {
          if (err) {
            console.log(err);
            return 0;
          } else {
            fJobStep1();
          }
        });
      }

      function fJobStep1() {
        let jobStep1Text = strings(language).jobStep1Text;

        bot.sendMessage(chatId, jobStep1Text, {
          parse_mode: 'HTML'
        });

        bot.once('message', msgWithTitle => {
          //взяти і зберегти заголовок

          dbDraft.findOne({ user_id: user_id, section: 'job' }, function(
            err,
            draft
          ) {
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
                let jobStep2Text = strings(language).jobStep2Text;

                bot.sendMessage(chatId, jobStep2Text, {
                  parse_mode: 'HTML'
                });

                bot.once('message', msg => {
                  draft.text = msg.text;

                  let preparedText = '🧳 ';
                  preparedText += `<b>${draft.title}</b>\n\n`;
                  preparedText += strings(language).jobPreparedText.draftText;
                  preparedText += draft.text;
                  preparedText += strings(language).jobPreparedText
                    .draftFirstName;
                  preparedText += draft.firstName;
                  preparedText += strings(language).jobPreparedText
                    .draftPhoneNumber;
                  preparedText += draft.phoneNumber;

                  draft.preparedText = preparedText;

                  draft.save().then(() => {
                    let jobStep3Text = strings(language).jobStep3Text;

                    jobStep3Text +=
                      draft.preparedText + '\n➖➖➖➖➖➖➖➖➖➖➖';

                    var keyboardStr = publishOrCancelKeyboard(language);

                    bot.sendMessage(msg.chat.id, jobStep3Text, {
                      reply_markup: keyboardStr,
                      parse_mode: 'HTML'
                    });
                  });
                });
              });
            }
          });
        });
      }
    }
  });
}
module.exports = publishJob;
