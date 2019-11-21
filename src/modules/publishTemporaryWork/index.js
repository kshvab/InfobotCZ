const bot = require('../../bot');
const mongoose = require('mongoose');
const strings = require('../../strings');
const chooseCategorieKeyboard = require('./keyboards/chooseCategorieKeyboard');
const fUserInitialization = require('../../logicFunctions/fUserInitialization');
const dbUser = require('../../db/models/user');
const dbDraft = require('../../db/models/draft');

// ----- Ця функція викликається, де параметром є контакт користувача
function publishTemporaryWork(msg) {
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

      dbDraft.findOne({ user_id: user_id, section: 'temporaryWork' }, function(
        err,
        draft
      ) {
        if (err) {
          console.log(err);
          return 0;
        } else if (!draft) {
          fInitialDraftSave();
        } else {
          fTempWorkStep1();
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
          section: 'temporaryWork'
        });

        newDraft.save(function(err) {
          if (err) {
            console.log(err);
            return 0;
          } else {
            fTempWorkStep1();
          }
        });
      }

      function fTempWorkStep1() {
        let tempWorkStep1Text = strings(language).temporaryWorkStep1Text;

        bot.sendMessage(chatId, tempWorkStep1Text, {
          parse_mode: 'HTML'
        });

        bot.once('message', msgWithTitle => {
          //взяти і зберегти заголовок

          dbDraft.findOne(
            { user_id: user_id, section: 'temporaryWork' },
            function(err, draft) {
              if (err) {
                console.log(err);
                return 0;
              } else if (!draft) {
                fInitialDraftSave();
              } else {
                draft.title = msgWithTitle.text;
                draft.save().then(() => {
                  fShowGoTo_2step();
                });
              }
            }
          );
        });
      }

      function fShowGoTo_2step() {
        var keyboardStr = chooseCategorieKeyboard(language);
        let tempWorkStep2Text = strings(language).temporaryWorkStep2Text;
        bot.sendMessage(chatId, tempWorkStep2Text, {
          reply_markup: keyboardStr,
          parse_mode: 'HTML'
        });
      }
    }
  });
}
module.exports = publishTemporaryWork;
