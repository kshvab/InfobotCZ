module.exports = {
  back: '🔙 Назад',
  cancel: '❌ Отменить',
  publish: '✅ Опубликовать',
  checked: '✅ ',
  unChecked: '⭕️ ',
  saved: 'Сохранено ',
  share: '🆒 Поделиться ботом с друзьями',
  underConstructionMessage: `<b>💬 В разработке</b>`,
  contactPermissionButton: '✅ Предоставить контактные данные',

  //-------------- MAIN MENU -------------------//
  mainMenuMessage: `💬 <b>ГЛАВНОЕ МЕНЮ:</b>`,
  mainMenuOptions: {
    temporaryWork: '🧰 Фушки',
    job: '🧳 Работа',
    realty: '🏠 Аренда жилья',
    transportation: '🚌 Перевозчики',
    tickets: '📄 Продажа билетов  (🚌   🛩  🚞)',
    myLanguage: 'Язык: 🇷🇺',
    settingsReport: '⚙️ Отчет',
    help: 'ℹ️ Инфо'
  },

  //-------------- TEMPORARY WORK MENU -------------------//
  temporaryWorkMenuIcon: '🧰 ',
  temporaryWorkMenuMessage: `<b>Фушки:</b>`,
  temporaryWorkSubscribeMessage:
    '✅ Вы подписались на уведомления о фушках. Бот будет присылать Вам такие уведомления регулярно, если они будут соответствовать Вашим настройкам.',
  temporaryWorkUnSubscribeMessage:
    '⭕️ Подписку на уведомления о фушках отменено. Бот не будет присылать Вам такие уведомления регулярно.',
  temporaryWorkMenuOptions: {
    subscribe: 'Получать уведомления о фушках',
    getLastTemporaryWork: '🔄 Фушки - последние объявления',
    editCategories: '📌 Категории фушок',
    editLocations: '🗺 Локации',
    back: '🔙 Назад',
    publish: '📝 Опубликовать фушку'
  },
  temporaryWorkContactPermissionText:
    'Чтобы разместить объявление о фушке, предоставьте мне Ваши контактные данные с помощью кнопки 👇:',
  temporaryWorkStep1Text:
    '💬 <b>Публикуем объявление о фушке.</b>\n\n1️⃣ <b>Напишите заголовок объявления:</b>',
  temporaryWorkStep2Text:
    '💬 <b>Публикуем объявление о фушке.</b>\n\n2️⃣ <b>Выберите категорию труда:</b>',
  temporaryWorkStep3Text:
    '💬 <b>Публикуем объявление о фушке.</b>\n\n3️⃣ <b>Выберите локацию:</b>',
  temporaryWorkStep4Text: `💬 <b>Публикуем объявление о фушке.</b>\n
4️⃣ <b>Напишите, пожалуйста, текст вашего объявления.</b>

📝 Рекомендую указать в тексте такую информацию:

✔️ Информация о месте работы
✔️ Для кого эта работа и какие требования
✔️ Что предлагаете, условия
✔️ Какая заработная плата
✔️ Когда начало и какова продолжительность работы`,

  temporaryWorkStep5Text: `💬 <b>Публикуем объявление о фушке.</b>\n
5️⃣ <b>Проверьте текст вашего объявления. Если все верно, нажмите кнопку Опубликовать:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  temporaryWorkSuccessMessagePart1:
    '✅ Успешная публикация!\n\n✔️ Ваше объявление было успешно отправлено пользователям.\n',
  temporaryWorkSuccessMessagePart2:
    '✔️ Ваше объявление сохранено в базе на 48 часов.\n',

  temporaryWorkPreparedText: {
    draftText: '✅ содержание объявления\n',
    draftInfo: '\n\n✅ Информация\n',
    draftCategorie: '<b>Категория:</b> ',

    draftLocation: '\n<b>Локация:</b> ',
    draftFirstName: '\n\n<b>👤 Контакт:</b> ',
    draftPhoneNumber: '\n<b>☎️ Телефон:</b> '
  },
  showLastTemporaryWorkStrings: {
    noCategoriesSelected:
      '<i>⚠️ В Ваших настройках не выбрано ни одной категории!</i>',
    noLocationsSelected:
      '<i>⚠️ В Ваших настройках не выбрано ни одной локации!</i>',
    noRelevantItems:
      '⚠️ За последние 48 часов еще нет объявлений, соответствующих вашим настройкам',
    reportQuantitySent:
      ' сообщений Вам было отправлено в соответствии с Вашими текущими настройками.'
  },
  //=================================================================================

  //-------------- JOB MENU -------------------//
  jobMenuIcon: '🧳 ',
  jobMenuMessage: `<b>Работа:</b>`,
  jobSubscribeMessage:
    '✅ Вы подписались на оповещения об официальной работе. Бот будет присылать Вам такие уведомления регулярно.',
  jobUnSubscribeMessage:
    '⭕️ Подписку на оповещения об официальной работе отменено. Бот не будет присылать Вам такие уведомления регулярно.',
  jobMenuOptions: {
    subscribe: 'Получать уведомления об официальной работе',
    getLastjob: '🔄 Работа - последние объявления',
    back: '🔙 Назад',
    publish: '📝 Опубликовать работу'
  },
  jobContactPermissionText:
    'Чтобы разместить объявление о работе, предоставьте мне Ваши контактные данные с помощью кнопки 👇:',
  jobStep1Text:
    '💬 <b>Публикуем объявление об официальной работе.</b>\n\n1️⃣ <b>Напишите заголовок объявления:</b>',
  jobStep2Text: `💬 <b>Публикуем объявление об официальной работе.</b>\n
  2️⃣ <b>Напишите, пожалуйста, текст вашего объявления.</b>

📝 Рекомендую указать в тексте такую информацию:

✔️ Информация о месте работы
✔️ Для кого эта работа и какие требования
✔️ Что предлагаете, какие условия
✔️ Какая заработная плата
✔️ Когда начало и какова продолжительность работы`,

  jobStep3Text: `💬 <b>Публикуем объявление об официальной работе.</b>\n
3️⃣ <b>Проверьте текст вашего объявления.Если все верно, нажмите кнопку Опубликовать:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  jobSuccessMessagePart1:
    '✅ Успешная публикация!\n\n✔️ Ваше объявление было успешно отправлено пользователям.\n',
  jobSuccessMessagePart2: '✔️ Ваше объявление сохранено в базе на 1 неделю.\n',

  jobPreparedText: {
    draftText: '✅ Содержание объявления\n',
    draftFirstName: '\n\n<b>👤 Контакт:</b> ',
    draftPhoneNumber: '\n<b>☎️ Телефон:</b> '
  },
  showLastJobStrings: {
    noRelevantItems:
      '⚠️ За последнюю неделю еще нет объявлений об официальной работе.',
    reportQuantitySent: ' сообщений Вам было отправлено об официальной работе.'
  },
  //=================================================================================
  //**********--**********--*************--***********************--*********************************--******************-- */
  //-------------- TRANSPORTATION MENU -------------------//
  transportationMenuIcon: '🚌 ',
  transportationMenuMessage: `<b>Перевозчики:</b>`,
  transportationSubscribeMessage:
    '✅ Вы подписались на оповещения об услугах перевозчиков и маршруты водителей, которые готовы взять попутных пассажиров. Бот будет присылать Вам такие уведомления регулярно.',
  transportationUnSubscribeMessage:
    '⭕️ Подписку на оповещение об услугах перевозчиков и маршруты водителей, которые готовы взять попутных пассажиров, отменено. Бот не будет присылать Вам такие уведомления регулярно.',
  transportationMenuOptions: {
    subscribe: 'Получать уведомления о перевозчиках',
    getLastTransportation: '🔄 Перевозчики - последние объявления',
    back: '🔙 Назад',
    publish: '📝 Опубликовать маршрут'
  },
  transportationContactPermissionText:
    'Чтобы разместить объявление о маршруте, предоставьте мне Ваши контактные данные с помощью кнопки 👇:',
  transportationStep1Text:
    '💬 <b>Публикуем объявление о маршруте.</b>\n\n1️⃣ <b>Напишите заголовок объявления:</b>',
  transportationStep2Text: `💬 <b>Публикуем объявление о маршруте.</b>\n
  2️⃣ <b>Напишите, пожалуйста, текст вашего объявления.</b>

📝 Рекомендую указать в тексте такую информацию:

✔️ Дата поездки
✔️ Место отправления
✔️ Место назначения
✔️ В каких местах, кроме этих точек, Вы готовы взять пассажиров`,

  transportationStep3Text: `💬 <b>Публикуем объявление о маршруте.</b>\n
3️⃣ <b>Проверьте текст вашего объявления. Если все верно, нажмите кнопку Опубликовать:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  transportationSuccessMessagePart1:
    '✅ Успешная публикация!\n\n✔️ Ваше объявление было успешно отправлено пользователям.\n',
  transportationSuccessMessagePart2:
    '✔️ Ваше объявление сохранено в базе на 1 ytltk..\n',

  transportationPreparedText: {
    draftText: '✅ Содержание объявления\n',
    draftFirstName: '\n\n<b>👤 Контакт:</b> ',
    draftPhoneNumber: '\n<b>☎️ Телефон:</b> '
  },
  showLastTransportationStrings: {
    noRelevantItems: '⚠️ За последнюю неделю еще нет объявлений о маршрутах.',
    reportQuantitySent: ' сообщений Вам было отправлено о маршрутах.'
  },
  //=================================================================================
  //---------------- EDIT CATEGORIES -----------------//
  editCategoriesMessage: `💬 <b>ВЫБОР КАТЕГОРИИ РАБОТЫ:</b>
Выберите необходимые категории работы:`,

  jobCategories: {
    administration: 'Административная работа',
    manual: 'Ручной труд',
    services: 'Сфера услуг',
    other: 'Другое'
  },

  //---------------- EDIT LANGUAGES -----------------//
  editLanguagesMessage: `💬 <b>ВЫБОР ЯЗЫКА:</b>
Выберите, пожалуйста, язык:`,

  languages: {
    languageUa: 'Українська 🇺🇦',
    languageCz: 'Czech 🇨🇿',
    languageEn: 'English 🇺🇸',
    languageRu: 'Русский 🇷🇺'
  },

  //------------------ EDIT LOCATIONS ---------------//
  editLocationsMessage: `💬 <b>ВЫБОР ЛОКАЦИИ:</b>
Выберите необходимые локации`,

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
    firstPart: `💬 <b>Отчет о Ваших настройках:</b>`,
    temporaryWorkSubscribed:
      '✅ <b>Фушки - Вы подписаны на оповещения о фушках с такими настройками:</b>',
    temporaryWorkUnSubscribed:
      '⭕️ <b>Фушки - Вы не подписаны на оповещения о фушках</b>',
    jobSubscribed: '✅ <b>Работа - Вы подписаны на оповещения о работе</b>',
    jobUnSubscribed:
      '⭕️ <b>Работа - Вы не подписаны на оповещения о работе</b>',
    noCategoriesSelected:
      '<i>⚠️ В Ваших настройках не выбрано ни одной категории!</i>',
    suchCategoriesSelected: '📌 <b>Категории фушок:</b>',
    checked: '✔️ ',
    bell: '🔔 ',
    noLocationsSelected:
      '<i>⚠️ В Ваших настройках не выбрано ни одной локации!</i>',
    suchLocationsSelected: '🗺  <b>Локации фушок:</b>',
    transportationSubscribed:
      '✅ <b>Перевозчики - Вы подписаны на оповещения о перевозчиках</b>',
    transportationUnSubscribed:
      '⭕️ <b>Перевозчики - Вы не подписаны на оповещения о перевозчиках</b>'
  },

  //------------------ HELP MESSAGE ----------
  helpMessage: `💬 <b>Для чего этот бот?</b>

🧰 Бот будет присылать вам актуальные вакансии временной работы в Чехии (фушки) по выбранным Вами категориям и локациям. 

🧳 Бот будет присылать вам актуальные вакансии официальной работы для иностранцев в Чехии, в том числе от агентур и прямых работодателей.

🚌 Бот будет присылать вам актуальные маршруты пассажирских перевозчиков и маршруты водителей, которые готовы взять попутных пассажиров.

✅ В настройках Вы можете активировать или отменить подписку отдельно на каждый из этих разделов.

✅ Теперь есть возможность осуществить запрос на свежие объявления в каждом разделе.

<b>Ждите в следующей версии бота:</b>
🏠 <i>Раздел об аренде жилья</i>

<b>Помогите улучшить!</b>
Если вы обнаружили баг или у Вас есть какие-то идеи или предложения, как улучшить функционал бота, напишите нам.

<b>Разработка и поддержка:</b> @kshvab
v2.0.1
`,

  shareFirstMsg: '💬 Поделись ботом с друзьями, перешли ссылки: ',
  shareLinkMsg: 'https://t.me/czech_infobot',
  shareBotUsernameMsg: '@czech_infobot',

  newVersionMsg: `💬 <b>Версию бота обновлено</b>
<i>Текущая версия: v2.0.1</i>

В новой версии у Вас есть возможность:

🧰 Публиковать собственные объявления о фушках.

🧳 Подписаться на объявления об актуальных вакансиях официальной работы для иностранцев в Чехии, в том числе от агентур и прямых работодателей, публиковать собственные объявления в этом разделе.

🚌 Подписаться на объявления об актуальных маршрутах пассажирских перевозчиков и маршрутах водителей, которые готовы взять попутных пассажиров, публиковать собственные объявления в этом разделе.
`
};
