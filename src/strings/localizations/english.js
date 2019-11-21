module.exports = {
  back: '🔙 Back',
  cancel: '❌ Cancel',
  publish: '✅ Publish',
  checked: '✅ ',
  unChecked: '⭕️ ',
  saved: 'Saved ',
  share: '🆒 Share the bot with your friends',
  underConstructionMessage: `<b>💬 Under development</b>`,
  contactPermissionButton: '✅ Provide contact information',
  //-------------- MAIN MENU -------------------//
  mainMenuMessage: `💬 <b>MAIN MENU:</b>`,
  mainMenuOptions: {
    temporaryWork: '🧰 Fushkas',
    job: '🧳 Work',
    realty: '🏠 Housing for rent',
    transportation: '🚌 Carriers',
    tickets: '📄 Ticket sales  (🚌   🛩  🚞)',
    myLanguage: 'Language: 🇺🇸',
    settingsReport: '⚙️ Report',
    help: 'ℹ️ Info'
  },

  //-------------- TEMPORARY WORK MENU -------------------//
  temporaryWorkMenuIcon: '🧰 ',
  temporaryWorkMenuMessage: `<b>Fushkas:</b>`,
  temporaryWorkSubscribeMessage:
    '✅ You have signed up for a fushkas notifications. The bot will send you such notifications on a regular basis, if they match your preferences.',
  temporaryWorkUnSubscribeMessage:
    '⭕️ The subscription to the fushkas notification has been canceled. The bot will not send you such notifications regularly.',
  temporaryWorkMenuOptions: {
    subscribe: 'Receive notifications on fushkas',
    getLastTemporaryWork: '🔄 Fushkas - latest ads',
    editCategories: '📌 Categories of fushkas',
    editLocations: '🗺 Locations',
    back: '🔙 Back',
    publish: '📝 Post a Fushka'
  },
  temporaryWorkContactPermissionText:
    'To post a Fushka, please provide me with your contact information via a button 👇:',
  temporaryWorkStep1Text:
    '💬 <b>Publishing a Fushka.</b>\n\n1️⃣ <b>Write the title:</b>',
  temporaryWorkStep2Text:
    '💬 <b>Publishing a Fushka.</b>\n\n2️⃣ <b>Select the category of work:</b>',
  temporaryWorkStep3Text:
    '💬 <b>Publishing a Fushka.</b>\n\n3️⃣ <b>Select the location:</b>',
  temporaryWorkStep4Text: `💬 <b>Publishing a Fushka.</b>\n
4️⃣ <b>Please write your ad text.</b>

📝 I recommend that you include the following information in the text:

✔️ Place of work
✔️ Who is this job for and what are the requirements
✔️ What do you offer, what are the conditions
✔️ What a paycheck
✔️ When to start and what isthe duration of work`,

  temporaryWorkStep5Text: `💬 <b>ПPublishing a Fushka.</b>\n
5️⃣ <b>Please check the text of your ad. If that's right, click the Publish button:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  temporaryWorkSuccessMessagePart1:
    '✅ Success!\n\n✔️ Your ad was successfully sent to users.\n',
  temporaryWorkSuccessMessagePart2:
    '✔️ Your ad has been stored for 48 hours.\n',

  temporaryWorkPreparedText: {
    draftText: '✅ The content of the ad\n',
    draftInfo: '\n\n✅ Information\n',
    draftCategorie: '<b>Category:</b> ',

    draftLocation: '\n<b>Location:</b> ',
    draftFirstName: '\n\n<b>👤 Contact:</b> ',
    draftPhoneNumber: '\n<b>☎️ Phone:</b> '
  },
  showLastTemporaryWorkStrings: {
    noCategoriesSelected:
      '<i>⚠️ No categories are selected in your settings!</i>',
    noLocationsSelected:
      '<i>⚠️ No locations are selected in your settings!</i>',
    noRelevantItems:
      '⚠️ There are no ads in the past 48 hours that match your preferences',
    reportQuantitySent:
      ' messages you have been sent according to your current settings.'
  },
  //=================================================================================

  //-------------- JOB MENU -------------------//
  jobMenuIcon: '🧳 ',
  jobMenuMessage: `<b>Job:</b>`,
  jobSubscribeMessage:
    '✅ You have signed up for a job announcement. The bot will send you such notifications on a regular basis.',
  jobUnSubscribeMessage:
    '⭕️ The official job notification subscription has been canceled. The bot will not send you such notifications regularly.',
  jobMenuOptions: {
    subscribe: 'Receive job notifications',
    getLastjob: '🔄 Job - the latest ads',
    back: '🔙 Back',
    publish: '📝 Post a job'
  },
  jobContactPermissionText:
    'To post a job, please provide me with your contact information via the button 👇:',
  jobStep1Text:
    '💬 <b>Publishing job announcements.</b>\n\n1️⃣ <b>Write the title:</b>',
  jobStep2Text: `💬 <b>Publishing job announcements.</b>\n
  2️⃣ <b>Please write your ad text.</b>

📝 I recommend that you include the following information in the text:

✔️ Place of work
✔️ Who is this job for and what are the requirements
✔️ What do you offer, what are the conditions
✔️ What a paycheck
✔️ When to start and what is the duration of work`,

  jobStep3Text: `💬 <b>Publishing job announcements.</b>\n
3️⃣ <b>Please check the text of your ad. If that's right, click the Publish button:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  jobSuccessMessagePart1:
    '✅ Successful!\n\n✔️ Your ad was successfully sent to users.\n',
  jobSuccessMessagePart2: '✔️ Your ad has been stored for 1 week.\n',

  jobPreparedText: {
    draftText: '✅ The content\n',
    draftFirstName: '\n\n<b>👤 Contact:</b> ',
    draftPhoneNumber: '\n<b>☎️ Phone:</b> '
  },
  showLastJobStrings: {
    noRelevantItems: '⚠️ There are no job postings in the last week.',
    reportQuantitySent: ' messages have been sent to you about official jobs.'
  },
  //=================================================================================

  //-------------- TRANSPORTATION MENU -------------------//
  transportationMenuIcon: '🚌 ',
  transportationMenuMessage: `<b>Carriers:</b>`,
  transportationSubscribeMessage:
    '✅ You have subscribed to the carrier notification and driving directions that are ready to take passengers on the way. The bot will send you such notifications on a regular basis.',
  transportationUnSubscribeMessage:
    '⭕️ Subscription to carrier notices and driving directions that are ready to pick up passengers has been canceled. The bot will not send you such notifications regularly.',
  transportationMenuOptions: {
    subscribe: 'Receive carrier notifications',
    getLastTransportation: '🔄 Carriers - the latest ads',
    back: '🔙 Back',
    publish: '📝 Post route'
  },
  transportationContactPermissionText:
    'To post a route announcement, please provide me with your contact information via a button 👇:',
  transportationStep1Text:
    '💬 <b>Publishing a route announcement.</b>\n\n1️⃣ <b>Write the title:</b>',
  transportationStep2Text: `💬 <b>Publishing a route announcement.</b>\n
  2️⃣ <b>Please write your ad text.</b>

📝 I recommend that you include the following information in the text:

✔️ Date of trip
✔️ Departure place
✔️ Destination
✔️ At what places besides these points are you ready to pick passengers up`,

  transportationStep3Text: `💬 <b>Publishing a route announcement.</b>\n
3️⃣ <b>Please check the text of your ad. If that's right, click the Publish button:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  transportationSuccessMessagePart1:
    '✅ Successful!\n\n✔️ Your ad was successfully sent to users.\n',
  transportationSuccessMessagePart2: '✔️ Your ad has been stored for 1 week.\n',

  transportationPreparedText: {
    draftText: '✅ The content\n',
    draftFirstName: '\n\n<b>👤 Contact:</b> ',
    draftPhoneNumber: '\n<b>☎️ Phone:</b> '
  },
  showLastTransportationStrings: {
    noRelevantItems: '⚠️ There are no route announcements in the last week.',
    reportQuantitySent: ' messages have been sent to you about routes.'
  },
  //=================================================================================
  //---------------- EDIT CATEGORIES -----------------//
  editCategoriesMessage: `💬 <b>SELECTING A CATEGORY OF WORK:</b>
  Select the required work categories:`,

  jobCategories: {
    administration: 'Administration',
    manual: 'Manual',
    services: 'Services',
    other: 'Other'
  },

  //---------------- EDIT LANGUAGES -----------------//
  editLanguagesMessage: `💬 <b>LANGUAGE SELECTION:</b>
  Please select a language:`,

  languages: {
    languageUa: 'Українська 🇺🇦',
    languageCz: 'Czech 🇨🇿',
    languageEn: 'English 🇺🇸',
    languageRu: 'Русский 🇷🇺'
  },

  //------------------ EDIT LOCATIONS ---------------//
  editLocationsMessage: `💬 <b>LOCATION SELECTION:</b>
  Select the locations`,

  locations: {
    praha: {
      krayName: 'Praha',
      praha1: 'Praha 1',
      praha2: 'Praha 2',
      praha3: 'Praha 3',
      praha4: 'Praha 4',
      praha5: 'Praha 5',
      praha6: 'Praha 6',
      praha7: 'Praha 7',
      praha8: 'Praha 8',
      praha9: 'Praha 9',
      praha10: 'Praha 10'
    },
    stredoceskyKraj: {
      krayName: 'Středočeský kraj',
      benesov: 'Benešov',
      beroun: 'Beroun',
      kladno: 'Kladno',
      kolin: 'Kolín',
      kutnaHora: 'Kutná Hora',
      melnik: 'Mělník',
      mladaBoleslav: 'Mladá Boleslav',
      nymburk: 'Nymburk',
      prahaVychod: 'Praha - východ',
      prahaZapad: 'Praha - západ',
      pribram: 'Příbram',
      rakovnik: 'Rakovník'
    },
    jihoceskyKraj: {
      krayName: 'Jihočeský kraj',
      ceskeBudejovice: 'České Budějovice',
      ceskyKrumlov: 'Český Krumlov',
      jindrichuvHradec: 'Jindřichův Hradec',
      pisek: 'Písek',
      prachatice: 'Prachatice',
      strakonice: 'Strakonice',
      tabor: 'Tábor'
    },
    plzenskyKraj: {
      krayName: 'Plzeňský kraj',
      domazlice: 'Domažlice',
      klatovy: 'Klatovy',
      plzen: 'Plzeň',
      plzenJih: 'Plzeň - jih',
      plzenSever: 'Plzeň - sever',
      rokycany: 'Rokycany',
      tachov: 'Tachov'
    },
    karlovarskyKraj: {
      krayName: 'Karlovarský kraj',
      cheb: 'Cheb',
      karlovyVary: 'Karlovy Vary',
      sokolov: 'Sokolov'
    },
    usteckyKraj: {
      krayName: 'Ústecký kraj',
      decin: 'Děčín',
      chomutov: 'Chomutov',
      litomerice: 'Litoměřice',
      louny: 'Louny',
      most: 'Most',
      teplice: 'Teplice',
      ustiNadLabem: 'Ústí nad Labem'
    },
    libereckyKraj: {
      krayName: 'Liberecký kraj',
      ceskaLipa: 'Česká Lípa',
      jablonecNadNisou: 'Jablonec nad Nisou',
      liberec: 'Liberec',
      semily: 'Semily'
    },
    kralovehradeckyKraj: {
      krayName: 'Královehradecký kraj',
      hradecKralove: 'Hradec Králové',
      jicin: 'Jičín',
      nachod: 'Náchod',
      rychnovNadKneznou: 'Rychnov nad Kněžnou',
      trutnov: 'Trutnov'
    },
    pardubickyKraj: {
      krayName: 'Pardubický kraj',
      chrudim: 'Chrudim',
      pardubice: 'Pardubice',
      svitavy: 'Svitavy',
      ustiNadOrlici: 'Ústí nad Orlicí'
    },
    vysocina: {
      krayName: 'Vysočina',
      pelhrimov: 'Pelhřimov',
      havlickuvBrod: 'Havlíčkův Brod',
      jihlava: 'Jihlava',
      trebic: 'Třebíč',
      zdarNadSazavou: 'Žďár nad Sázavou'
    },
    jihomoravskyKraj: {
      krayName: 'Jihomoravský kraj',
      blansko: 'Blansko',
      brno: 'Brno',
      brnoVenkov: 'Brno - venkov',
      breclav: 'Břeclav',
      hodonin: 'Hodonín',
      vyskov: 'Vyškov',
      znojmo: 'Znojmo'
    },
    olomouckyKraj: {
      krayName: 'Olomoucký kraj',
      prostejov: 'Prostějov',
      olomouc: 'Olomouc',
      prerov: 'Přerov',
      sumperk: 'Šumperk',
      jesenik: 'Jeseník'
    },
    moravskoslezskyKraj: {
      krayName: 'Moravskoslezský kraj',
      bruntal: 'Bruntál',
      frydekMistek: 'Frýdek - Místek',
      karvina: 'Karviná',
      novyJicin: 'Nový Jičín',
      opava: 'Opava',
      ostrava: 'Ostrava'
    },
    zlinskyKraj: {
      krayName: 'Zlínský kraj',
      zlin: 'Zlín',
      kromeriz: 'Kroměříž',
      uherskeHradiste: 'Uherské Hradiště',
      vsetin: 'Vsetín'
    }
  },

  showMySettingsReportStrings: {
    firstPart: `💬 <b>Report about your settings:</b>`,
    temporaryWorkSubscribed:
      '✅ <b>Fushkas - You are subscribed to the Fushkas notifications with the following settings:</b>',
    temporaryWorkUnSubscribed:
      '⭕️ <b>Fushkas - You are not subscribed to the Fushkas notifications</b>',
    jobSubscribed: '✅ <b>Job - You are subscribed to a job notifications</b>',
    jobUnSubscribed:
      '⭕️ <b>Jobs - You are not subscribed for a job notifications</b>',
    noCategoriesSelected:
      '<i>⚠️ No categories are selected in your settings!</i>',
    suchCategoriesSelected: '📌 <b>Categories:</b>',
    checked: '✔️ ',
    bell: '🔔 ',
    noLocationsSelected: '<i>⚠️ No location selected in your settings!</i>',
    suchLocationsSelected: '🗺  <b>Locations:</b>',
    transportationSubscribed:
      '✅ <b>Carriers - You are subscribed to carrier notifications</b>',
    transportationUnSubscribed:
      '⭕️ <b>Carriers - You are not subscribed for carrier notifications</b>'
  },

  //------------------ HELP MESSAGE ----------
  helpMessage: `💬 <b>What is this bot for?</b>

🧰 The bot will send you up-to-date temporary work vacancies in the Czech Republic (fushkas) for your chosen categories and locations. 

🧳 The bot will send you up-to-date job openings for foreigners in the Czech Republic, including from agents and direct employers.

🚌 The bot will send you up-to-date passenger routes and drivers that are ready to pick up passengers.

✅ You can subscribe or unsubscribe separately for each of these sections.

✅ Now it's possible to request the recent ads in each section.

<b>Wait in the next version of the bot:</b>
🏠 <i>Housing section</i>

<b>Help improve!</b>
If you find a bug or have any ideas or suggestions on how to improve the functionality of the bot, write to us.

<b>Development and support:</b> @kshvab
v2.0.1
`,

  shareFirstMsg: '💬 Share the bot with your friends: ',
  shareLinkMsg: 'https://t.me/czech_infobot',
  shareBotUsernameMsg: '@czech_infobot',

  newVersionMsg: `💬 <b>Bot version updated</b>
<i>The current version: v2.0.1</i>

In the new version you can:

🧰 Post your own ads on fushkas.

🧳 Subscribe to announcements of current job openings for foreigners in the Czech Republic, including from agents and direct employers.

🚌 Subscribe to the announcement of current passenger routes and drivers that are ready to take passengers on board.
`
};
