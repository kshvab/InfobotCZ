const bot = require('./bot');
const beautyJSON = require('./helpers/beautyJSON');

const languagesArr = ['UA', 'EN', 'RU', 'CZ'];
const strings = require('./strings');

const fRegExpButton = require('../src/helpers/fRegExpButton');

//-------------- New Version Message ---------------
const fNewVersionMessage = require('./logicFunctions/fNewVersionMessage');
//fNewVersionMessage();
//-------------- New Version Message ---------------

const fUserInitialization = require('./logicFunctions/fUserInitialization');
const fUserShowTemporaryWorkMenu = require('./logicFunctions/fUserShowTemporaryWorkMenu');
const fUserShowJobMenu = require('./logicFunctions/fUserShowJobMenu');
const jobPublishOrCancelStep = require('./modules/publishJob/steps/jobPublishOrCancelStep');
const fUserShowLastJob = require('./logicFunctions/fUserShowLastJob');
const publishJobInitiation = require('./modules/publishJob/publishJobInitiation');
const publishJob = require('./modules/publishJob');
const fUserChangeJobSubscription = require('./logicFunctions/fUserChangeJobSubscription');

const fUserShowTransportationMenu = require('./logicFunctions/fUserShowTransportationMenu');
const transportationPublishOrCancelStep = require('./modules/publishTransportation/steps/transportationPublishOrCancelStep');
const fUserShowLastTransportation = require('./logicFunctions/fUserShowLastTransportation');
const publishTransportationInitiation = require('./modules/publishTransportation/publishTransportationInitiation');
const publishTransportation = require('./modules/publishTransportation');
const fUserChangeTransportationSubscription = require('./logicFunctions/fUserChangeTransportationSubscription');

const fUserShowUnderConstruction = require('./logicFunctions/fUserShowUnderConstruction');
const fUserChangeTemporaryWorkSubscription = require('./logicFunctions/fUserChangeTemporaryWorkSubscription');

const fEditCategories = require('./modules/editCategories/fEditCategories');
const categorieButtonPressed = require('./modules/editCategories/categorieButtonPressed');

const fEditLocations = require('./modules/editLocations/fEditLocations');
const locationButtonPressed = require('./modules/editLocations/locationButtonPressed');
const subLocationButtonPressed = require('./modules/editLocations/subLocationButtonPressed');

const fEditLanguages = require('./modules/editLanguages/fEditLanguages');
const languageButtonPressed = require('./modules/editLanguages/languageButtonPressed');

const fUserShowHelpMessage = require('./logicFunctions/fUserShowHelpMessage');

const fUserShowShareMessage = require('./logicFunctions/fUserShowShareMessage');

const fUserShowLastTemporaryWork = require('./logicFunctions/fUserShowLastTemporaryWork');

const fUserShowMySettingsReport = require('./logicFunctions/fUserShowMySettingsReport');
const publishTemporaryWorkInitiation = require('./modules/publishTemporaryWork/publishTemporaryWorkInitiation');

const k8toall = require('./logicFunctions/k8toall');

const publishTemporaryWork = require('./modules/publishTemporaryWork');

const tempWorkStep2 = require('./modules/publishTemporaryWork/steps/tempWorkStep2');
const tempWorkStep3 = require('./modules/publishTemporaryWork/steps/tempWorkStep3');
const tempWorkStep4 = require('./modules/publishTemporaryWork/steps/tempWorkStep4');
const tempWorkpublishOrCancelStep = require('./modules/publishTemporaryWork/steps/tempWorkpublishOrCancelStep');

//-------------- ON START -------------//
bot.onText(/\/start/, function(msg) {
  fUserInitialization(msg);
});

bot.onText(/\/k8echo (.+)/, (msg, [msgTextLine, parametr]) => {
  const chatId = msg.chat.id;
  let text = msg.text.slice(7);
  bot.sendMessage(chatId, text, {
    parse_mode: 'HTML'
  });
});

bot.onText(/\/k8toall (.+)/, (msg, [msgTextLine, parametr]) => {
  k8toall(msg);
});

//------------ ON MAIN MENU -----------//

const temporaryWorkButton = fRegExpButton('mainMenu', 'temporaryWork');
const jobButton = fRegExpButton('mainMenu', 'job');
const realtyButton = fRegExpButton('mainMenu', 'realty');
const transportationButton = fRegExpButton('mainMenu', 'transportation');
const ticketsButton = fRegExpButton('mainMenu', 'tickets');
const myLanguageButton = fRegExpButton('mainMenu', 'myLanguage');
const settingsReportButton = fRegExpButton('mainMenu', 'settingsReport');
const helpButton = fRegExpButton('mainMenu', 'help');

bot.onText(realtyButton, msg => {
  fUserShowUnderConstruction(msg);
});
bot.onText(ticketsButton, msg => {
  fUserShowUnderConstruction(msg);
});

//------------------------------------
bot.onText(temporaryWorkButton, msg => {
  fUserShowTemporaryWorkMenu(msg);
});

bot.onText(myLanguageButton, msg => {
  fEditLanguages(msg);
});

bot.onText(settingsReportButton, msg => {
  fUserShowMySettingsReport(msg);
});

bot.onText(helpButton, msg => {
  fUserShowHelpMessage(msg);
});

bot.onText(jobButton, msg => {
  fUserShowJobMenu(msg);
});

bot.onText(transportationButton, msg => {
  fUserShowTransportationMenu(msg);
});

//------------ ON TEMPORARY WORK MENU -----------//

const tempWorkButtonSubscribe = fRegExpButton('temporaryWorkMenu', 'subscribe');
const tempWorkButtonEditCategories = fRegExpButton(
  'temporaryWorkMenu',
  'editCategories'
);
const tempWorkButtonEditLocations = fRegExpButton(
  'temporaryWorkMenu',
  'editLocations'
);
const tempWorkButtonBack = fRegExpButton('temporaryWorkMenu', 'back');
const tempWorkButtonPublish = fRegExpButton('temporaryWorkMenu', 'publish');
const tempWorkButtonGetLastTemporaryWork = fRegExpButton(
  'temporaryWorkMenu',
  'getLastTemporaryWork'
);

bot.onText(tempWorkButtonSubscribe, msg => {
  fUserChangeTemporaryWorkSubscription(msg);
});
bot.onText(tempWorkButtonEditCategories, msg => {
  fEditCategories(msg);
});
bot.onText(tempWorkButtonEditLocations, msg => {
  fEditLocations(msg);
});
bot.onText(tempWorkButtonBack, msg => {
  fUserInitialization(msg);
});
bot.onText(tempWorkButtonGetLastTemporaryWork, msg => {
  fUserShowLastTemporaryWork(msg);
});
bot.onText(tempWorkButtonPublish, msg => {
  publishTemporaryWorkInitiation(msg);
});
//------------ ON JOB MENU -----------//

const jobButtonSubscribe = fRegExpButton('jobMenu', 'subscribe');
const jobButtonGetLastJob = fRegExpButton('jobMenu', 'getLastjob');
const jobButtonPublish = fRegExpButton('jobMenu', 'publish');

bot.onText(jobButtonSubscribe, msg => {
  fUserChangeJobSubscription(msg);
});
bot.onText(jobButtonGetLastJob, msg => {
  fUserShowLastJob(msg);
});
bot.onText(jobButtonPublish, msg => {
  publishJobInitiation(msg);
});

//=======================================================================
//------------ ON TRANSPORTATION MENU -----------//

const transportationButtonSubscribe = fRegExpButton(
  'transportationMenu',
  'subscribe'
);
const transportationButtonGetLastTransportation = fRegExpButton(
  'transportationMenu',
  'getLastTransportation'
);
const transportationButtonPublish = fRegExpButton(
  'transportationMenu',
  'publish'
);

bot.onText(transportationButtonSubscribe, msg => {
  fUserChangeTransportationSubscription(msg);
});
bot.onText(transportationButtonGetLastTransportation, msg => {
  fUserShowLastTransportation(msg);
});
bot.onText(transportationButtonPublish, msg => {
  publishTransportationInitiation(msg);
});
//=======================================================================

//------------ CALLBACK QUERIES -----------//

bot.on('callback_query', query => {
  let buttonPressed = query.data;
  //console.log(buttonPressed);
  if (buttonPressed.indexOf('share') == 0) fUserShowShareMessage(query);

  if (buttonPressed.indexOf('work_categorie') == 0)
    categorieButtonPressed(query);

  if (buttonPressed.indexOf('location') == 0) locationButtonPressed(query);
  if (buttonPressed.indexOf('sub_location') == 0)
    subLocationButtonPressed(query);

  if (buttonPressed.indexOf('language') == 0) languageButtonPressed(query);

  if (buttonPressed.indexOf('choose_publ_tempwork_categorie') == 0)
    tempWorkStep2(query);
  if (buttonPressed.indexOf('choose_publ_tempwork_location') == 0)
    tempWorkStep3(query);
  if (buttonPressed.indexOf('choose_publ_tempwork_sub_location') == 0)
    tempWorkStep4(query);
  if (buttonPressed.indexOf('publish_tempwork') == 0)
    tempWorkpublishOrCancelStep(query);
  if (buttonPressed.indexOf('publish_job') == 0) jobPublishOrCancelStep(query);
  if (buttonPressed.indexOf('publish_transportation') == 0)
    transportationPublishOrCancelStep(query);
  //bot.sendMessage(query.message.chat.id, beautyJSON(query));
  //bot.answerCallbackQuery(query.id, { text: 'Your message' }); //Алерт
});
//========================================================================
//bot.sendMessage('455174812', 'Колясік просив передать прівет!');

//  bot.on('message', msg => {
//  console.log(msg);
//});

bot.on('contact', msg => {
  // is it for publishTemporaryWork?
  console.log(msg.reply_to_message.text);

  for (let i = 0; i < languagesArr.length; i++) {
    if (
      msg.reply_to_message.text.indexOf(
        strings(languagesArr[i]).temporaryWorkContactPermissionText
      ) != -1
    ) {
      publishTemporaryWork(msg);
      break;
    } else if (
      msg.reply_to_message.text.indexOf(
        strings(languagesArr[i]).jobContactPermissionText
      ) != -1
    ) {
      publishJob(msg);
      break;
    } else if (
      msg.reply_to_message.text.indexOf(
        strings(languagesArr[i]).transportationContactPermissionText
      ) != -1
    ) {
      console.log(strings(languagesArr[i]).transportationContactPermissionText);
      publishTransportation(msg);
      break;
    }
    console.log(strings(languagesArr[i]).transportationContactPermissionText);
  }
});
