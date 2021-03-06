module.exports = {
  back: '🔙 Назад',
  cancel: '❌ Скасувати',
  publish: '✅ Опублікувати',
  checked: '✅ ',
  unChecked: '⭕️ ',
  saved: 'Збережено ',
  share: '🆒 Поділитися ботом з друзями',
  underConstructionMessage: `<b>💬 В розробці</b>`,
  contactPermissionButton: '✅ Надати контактні дані',

  //-------------- MAIN MENU -------------------//
  mainMenuMessage: `💬 <b>ГОЛОВНЕ МЕНЮ:</b>`,
  mainMenuOptions: {
    temporaryWork: '🧰 Фушки',
    job: '🧳 Робота',
    realty: '🏠 Оренда житла',
    transportation: '🚌 Перевізники',
    tickets: '📄 Продаж квитків  (🚌   🛩  🚞)',
    myLanguage: 'Мова: 🇺🇦',
    settingsReport: '⚙️ Звіт',
    help: 'ℹ️ Інфо'
  },

  //-------------- TEMPORARY WORK MENU -------------------//
  temporaryWorkMenuIcon: '🧰 ',
  temporaryWorkMenuMessage: `<b>Фушки:</b>`,
  temporaryWorkSubscribeMessage:
    '✅ Ви підписалися на сповіщення про фушки. Бот присилатиме Вам такі сповіщення регулярно, якщо вони відповідатимуть Вашим налаштуванням.',
  temporaryWorkUnSubscribeMessage:
    '⭕️ Підписку на сповіщення про фушки скасовано. Бот не присилатиме Вам такі сповіщення регулярно.',
  temporaryWorkMenuOptions: {
    subscribe: 'Отримувати сповіщення про фушки',
    getLastTemporaryWork: '🔄 Фушки - останні оголошення',
    editCategories: '📌 Категорії фушок',
    editLocations: '🗺 Локації',
    back: '🔙 Назад',
    publish: '📝 Опублікувати фушку'
  },
  temporaryWorkContactPermissionText:
    'Щоб опублікувати оголошення про фушку, надайте мені Ваші контактні дані за допомогою кнопки 👇:',
  temporaryWorkStep1Text:
    '💬 <b>Публікуємо оголошення про фушку.</b>\n\n1️⃣ <b>Напишіть заголовок оголошення:</b>',
  temporaryWorkStep2Text:
    '💬 <b>Публікуємо оголошення про фушку.</b>\n\n2️⃣ <b>Оберіть категорію праці:</b>',
  temporaryWorkStep3Text:
    '💬 <b>Публікуємо оголошення про фушку.</b>\n\n3️⃣ <b>Оберіть локацію:</b>',
  temporaryWorkStep4Text: `💬 <b>Публікуємо оголошення про фушку.</b>\n
4️⃣ <b>Напишіть, будь-ласка, текст Вашого оголошення.</b>

📝 Рекомендую вказати у тексті таку інформацію:

✔️ Інформація про місце роботи
✔️ Для кого ця робота та які вимоги
✔️ Що пропонуєте, які умови
✔️ Яка заробітна плата
✔️ Коли початок та яка тривалість роботи`,

  temporaryWorkStep5Text: `💬 <b>Публікуємо оголошення про фушку.</b>\n
5️⃣ <b>Перевірте текст Вашого оголошення. Якщо все вірно, натисніть кнопку Опублікувати:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  temporaryWorkSuccessMessagePart1:
    '✅ Успішна публікація!\n\n✔️ Ваше оголошення було успішно надіслано користувачам.\n',
  temporaryWorkSuccessMessagePart2:
    '✔️ Ваше оголошення збережене у базі на 48 годин.\n',

  temporaryWorkPreparedText: {
    draftText: '✅ Зміст оголошення\n',
    draftInfo: '\n\n✅ Інформація\n',
    draftCategorie: '<b>Категорія:</b> ',

    draftLocation: '\n<b>Локація:</b> ',
    draftFirstName: '\n\n<b>👤 Контакт:</b> ',
    draftPhoneNumber: '\n<b>☎️ Телефон:</b> '
  },
  showLastTemporaryWorkStrings: {
    noCategoriesSelected:
      '<i>⚠️ У Ваших налаштуваннях не вибрано жодної категорії!</i>',
    noLocationsSelected:
      '<i>⚠️ У Ваших налаштуваннях не вибрано жодної локації!</i>',
    noRelevantItems:
      '⚠️ За останні 48 годин немає оголошень, що відповідають вашим налаштуванням',
    reportQuantitySent:
      ' повідомлень Вам було надіслано відповідно до Ваших поточних налаштувань.'
  },
  //=================================================================================

  //-------------- JOB MENU -------------------//
  jobMenuIcon: '🧳 ',
  jobMenuMessage: `<b>Робота:</b>`,
  jobSubscribeMessage:
    '✅ Ви підписалися на сповіщення про офіційну роботу. Бот присилатиме Вам такі сповіщення регулярно.',
  jobUnSubscribeMessage:
    '⭕️ Підписку на сповіщення про офіційну роботу скасовано. Бот не присилатиме Вам такі сповіщення регулярно.',
  jobMenuOptions: {
    subscribe: 'Отримувати сповіщення про офіційну роботу',
    getLastjob: '🔄 Робота - останні оголошення',
    back: '🔙 Назад',
    publish: '📝 Опублікувати роботу'
  },
  jobContactPermissionText:
    'Щоб опублікувати оголошення про роботу, надайте мені Ваші контактні дані за допомогою кнопки 👇:',
  jobStep1Text:
    '💬 <b>Публікуємо оголошення про офіційну роботу.</b>\n\n1️⃣ <b>Напишіть заголовок оголошення:</b>',
  jobStep2Text: `💬 <b>Публікуємо оголошення про офіційну роботу.</b>\n
  2️⃣ <b>Напишіть, будь-ласка, текст Вашого оголошення.</b>

📝 Рекомендую вказати у тексті таку інформацію:

✔️ Інформація про місце роботи
✔️ Для кого ця робота та які вимоги
✔️ Що пропонуєте, які умови
✔️ Яка заробітна плата
✔️ Коли початок та яка тривалість роботи`,

  jobStep3Text: `💬 <b>Публікуємо оголошення про офіційну роботу.</b>\n
3️⃣ <b>Перевірте текст Вашого оголошення. Якщо все вірно, натисніть кнопку Опублікувати:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  jobSuccessMessagePart1:
    '✅ Успішна публікація!\n\n✔️ Ваше оголошення було успішно надіслано користувачам.\n',
  jobSuccessMessagePart2: '✔️ Ваше оголошення збережене у базі на 1 тиждень.\n',

  jobPreparedText: {
    draftText: '✅ Зміст оголошення\n',
    draftFirstName: '\n\n<b>👤 Контакт:</b> ',
    draftPhoneNumber: '\n<b>☎️ Телефон:</b> '
  },
  showLastJobStrings: {
    noRelevantItems:
      '⚠️ За останній тиждень немає оголошень про офіційну роботу.',
    reportQuantitySent: ' повідомлень Вам було надіслано про офіційну роботу.'
  },
  //=================================================================================

  //-------------- TRANSPORTATION MENU -------------------//
  transportationMenuIcon: '🚌 ',
  transportationMenuMessage: `<b>Перевізники:</b>`,
  transportationSubscribeMessage:
    '✅ Ви підписалися на сповіщення про послуги перевізників та маршрути водіїв, які готові взяти попутніх пасажирів. Бот присилатиме Вам такі сповіщення регулярно.',
  transportationUnSubscribeMessage:
    '⭕️ Підписку на сповіщення про послуги перевізників та маршрути водіїв, які готові взяти попутніх пасажирів скасовано. Бот не присилатиме Вам такі сповіщення регулярно.',
  transportationMenuOptions: {
    subscribe: 'Отримувати сповіщення про перевізників',
    getLastTransportation: '🔄 Перевізники - останні оголошення',
    back: '🔙 Назад',
    publish: '📝 Опублікувати маршрут'
  },
  transportationContactPermissionText:
    'Щоб опублікувати оголошення про маршрут, надайте мені Ваші контактні дані за допомогою кнопки 👇:',
  transportationStep1Text:
    '💬 <b>Публікуємо оголошення про маршрут.</b>\n\n1️⃣ <b>Напишіть заголовок оголошення:</b>',
  transportationStep2Text: `💬 <b>Публікуємо оголошення про маршрут.</b>\n
  2️⃣ <b>Напишіть, будь-ласка, текст Вашого оголошення.</b>

📝 Рекомендую вказати у тексті таку інформацію:

✔️ Дата поїздки
✔️ Місце відправлення
✔️ Місце призначення
✔️ У яких місцях крім цих точок Ви готові взяти пасажирів`,

  transportationStep3Text: `💬 <b>Публікуємо оголошення про маршрут.</b>\n
3️⃣ <b>Перевірте текст Вашого оголошення. Якщо все вірно, натисніть кнопку Опублікувати:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  transportationSuccessMessagePart1:
    '✅ Успішна публікація!\n\n✔️ Ваше оголошення було успішно надіслано користувачам.\n',
  transportationSuccessMessagePart2:
    '✔️ Ваше оголошення збережене у базі на 1 тиждень.\n',

  transportationPreparedText: {
    draftText: '✅ Зміст оголошення\n',
    draftFirstName: '\n\n<b>👤 Контакт:</b> ',
    draftPhoneNumber: '\n<b>☎️ Телефон:</b> '
  },
  showLastTransportationStrings: {
    noRelevantItems: '⚠️ За останній тиждень немає оголошень про маршрути.',
    reportQuantitySent: ' повідомлень Вам було надіслано про маршрути.'
  },
  //=================================================================================
  //---------------- EDIT CATEGORIES -----------------//
  editCategoriesMessage: `💬 <b>ВИБІР КАТЕГОРІЇ РОБОТИ:</b>
Оберіть необхідні категорії роботи:`,

  jobCategories: {
    administration: 'Адміністративна робота',
    manual: 'Ручна праця',
    services: 'Сфера послуг',
    other: 'Інше'
  },

  //---------------- EDIT LANGUAGES -----------------//
  editLanguagesMessage: `💬 <b>ВИБІР МОВИ:</b>
Оберіть, будь-ласка, мову:`,

  languages: {
    languageUa: 'Українська 🇺🇦',
    languageCz: 'Czech 🇨🇿',
    languageEn: 'English 🇺🇸',
    languageRu: 'Русский 🇷🇺'
  },

  //------------------ EDIT LOCATIONS ---------------//
  editLocationsMessage: `💬 <b>ВИБІР ЛОКАЦІЇ:</b>
Оберіть необхідні локації`,

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
    firstPart: `💬 <b>Звіт про Ваші налаштування:</b>`,
    temporaryWorkSubscribed:
      '✅ <b>Фушки - Ви підписані на сповіщення про фушки із такими налаштуваннями:</b>',
    temporaryWorkUnSubscribed:
      '⭕️ <b>Фушки - Ви не підписані на сповіщення про фушки</b>',
    jobSubscribed: '✅ <b>Робота - Ви підписані на сповіщення про роботу</b>',
    jobUnSubscribed:
      '⭕️ <b>Робота - Ви не підписані на сповіщення про роботу</b>',
    noCategoriesSelected:
      '<i>⚠️ У Ваших налаштуваннях не вибрано жодної категорії!</i>',
    suchCategoriesSelected: '📌 <b>Категорії фушок:</b>',
    checked: '✔️ ',
    bell: '🔔 ',
    noLocationsSelected:
      '<i>⚠️ У Ваших налаштуваннях не вибрано жодної локації!</i>',
    suchLocationsSelected: '🗺  <b>Локації фушок:</b>',
    transportationSubscribed:
      '✅ <b>Перевізники - Ви підписані на сповіщення про перевізників</b>',
    transportationUnSubscribed:
      '⭕️ <b>Перевізники - Ви не підписані на сповіщення про перевізників</b>'
  },

  //------------------ HELP MESSAGE ----------
  helpMessage: `💬 <b>Для чого цей бот?</b>

🧰 Бот присилатиме вам актуальні вакансії тимчасової роботи у Чехії (фушки) за обраними Вами категоріями і локаціями. 

🧳 Бот присилатиме вам актуальні вакансії офіційної роботи для іноземців у Чехії, у тому числі від агентур та прямих роботодавців.

🚌 Бот присилатиме вам актуальні маршрути пасажирських перевізників та маршрути водіїв, які готові взяти попутніх пасажирів.

✅ У налаштуваннях Ви можете активувати або скасувати підписку окремо на кожен з цих розділів.

✅ Тепер є можливість здійснити запит на найсвіжіші оголошення у кожному розділі.

<b>Чекайте у наступній версії бота:</b>
🏠 <i>Розділ про оренду житла</i>

<b>Допоможіть покращити!</b>
Якщо ви виявили баг, або у Вас є якісь ідеї чи пропозиції, як покращити функціонал бота, напишіть нам.

<b>Розробка і підтримка:</b> @kshvab
v2.0.1
`,

  shareFirstMsg: '💬 Поділися ботом з друзями, перешли посилання: ',
  shareLinkMsg: 'https://t.me/czech_infobot',
  shareBotUsernameMsg: '@czech_infobot',

  newVersionMsg: `💬 <b>Версію бота оновлено</b>
<i>Поточна версія: v2.0.1</i>

У новій версії у Вас є можливість:

🧰 Публікувати власні оголошення про фушки.

🧳 Підписатися на оголошення про актуальні вакансії офіційної робити для іноземців у Чехії, у тому числі від агентур та прямих роботодавців, публікувати власні оголошення у цей розділ.

🚌 Підписатися на оголошення про актуальні маршрути пасажирських перевізників та маршрути водіїв, які готові взяти попутніх пасажирів, публікувати власні оголошення у цей розділ.
`
};
