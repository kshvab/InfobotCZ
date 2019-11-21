const bot = require('../../bot');
const strings = require('../../strings');
const dbUser = require('../../db/models/user');
const editCategoriesInlineKeyboard = require('./editCategoriesInlineKeyboard');
const fUserShowTemporaryWorkMenu = require('../../logicFunctions/fUserShowTemporaryWorkMenu');

function categorieButtonPressed(query) {
  let userId = query.from.id;

  dbUser.findOne({ telegramUserId: userId }, function(err, person) {
    if (err) return handleError(err);

    if (!person) console.log('USER NOT exist');
    // DEV +++++++++++++++++++++++++++++++++++
    else {
      if (query.data == 'work_categorie_back') {
        let chatId = query.message.chat.id;
        let messageId = query.message.message_id;
        bot.deleteMessage(chatId, messageId);
        fUserShowTemporaryWorkMenu(query);
        return;
      }
      let alertText = '';
      if (query.data == 'work_categorie_administration') {
        person.workCategories.administration = !person.workCategories
          .administration;
        alertText = strings(person.language).saved;
        if (person.workCategories.administration)
          alertText += strings(person.language).checked;
        else alertText += strings(person.language).unChecked;
        alertText += strings(person.language).jobCategories.administration;
      }
      if (query.data == 'work_categorie_manual') {
        person.workCategories.manual = !person.workCategories.manual;

        alertText = strings(person.language).saved;
        if (person.workCategories.manual)
          alertText += strings(person.language).checked;
        else alertText += strings(person.language).unChecked;
        alertText += strings(person.language).jobCategories.manual;
      }

      if (query.data == 'work_categorie_services') {
        person.workCategories.services = !person.workCategories.services;
        alertText = strings(person.language).saved;
        if (person.workCategories.services)
          alertText += strings(person.language).checked;
        else alertText += strings(person.language).unChecked;
        alertText += strings(person.language).jobCategories.services;
      }
      if (query.data == 'work_categorie_other') {
        person.workCategories.other = !person.workCategories.other;
        alertText = strings(person.language).saved;
        if (person.workCategories.other)
          alertText += strings(person.language).checked;
        else alertText += strings(person.language).unChecked;
        alertText += strings(person.language).jobCategories.other;
      }

      person.save().then(() => {
        //bot.answerCallbackQuery(query.id, { text: alertText });
      });

      fChangeKeyboard(query, person);

      return;
    }
    return;
  });

  function fChangeKeyboard(query, person) {
    var msg = query.message;

    //console.log(msg, person);
    newKeyboard = editCategoriesInlineKeyboard(person);

    var opts = {
      reply_markup: newKeyboard,
      chat_id: msg.chat.id,
      message_id: msg.message_id,
      parse_mode: 'HTML'
    };

    let textEditCategories = strings(person.language).editCategoriesMessage;

    bot.editMessageText(textEditCategories, opts);
  }
}
module.exports = categorieButtonPressed;
