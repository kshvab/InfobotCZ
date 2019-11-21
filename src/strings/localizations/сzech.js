module.exports = {
  back: '🔙 Zpět',
  cancel: '❌ Zrušit',
  publish: '✅ Publikovat',
  checked: '✅ ',
  unChecked: '⭕️ ',
  saved: 'Uloženo ',
  share: '🆒 Sdílejte bot s přáteli',
  underConstructionMessage: `<b>💬 Ve vývoji</b>`,
  contactPermissionButton: '✅ Poskytněte kontaktní informace',
  //-------------- MAIN MENU -------------------//
  mainMenuMessage: `💬 <b>HLAVNÍ MENU:</b>`,
  mainMenuOptions: {
    temporaryWork: '🧰 Brigády',
    job: '🧳 Práce',
    realty: '🏠 Bydlení k pronájmu',
    transportation: '🚌 Dopravci',
    tickets: '📄 Prodej vstupenek  (🚌   🛩  🚞)',
    myLanguage: 'Jazyk: 🇨🇿',
    settingsReport: '⚙️ Zpráva',
    help: 'ℹ️ Info'
  },

  //-------------- TEMPORARY WORK MENU -------------------//
  temporaryWorkMenuIcon: '🧰 ',
  temporaryWorkMenuMessage: `<b>Brigády:</b>`,
  temporaryWorkSubscribeMessage:
    '✅ Zaregistrovali jste se k upozornění na Brigády. Boty vám budou pravidelně zasílat taková oznámení, pokud odpovídají vašim preferencím.',
  temporaryWorkUnSubscribeMessage:
    '⭕️ Upozornění na Brigády bylo zrušeno. Robot vám taková oznámení nebude pravidelně zasílat.',
  temporaryWorkMenuOptions: {
    subscribe: 'Dostávat oznámení o Brigády',
    getLastTemporaryWork: '🔄 Brigády - nedávné reklamy',
    editCategories: '📌 Kategorie',
    editLocations: '🗺 Místa',
    back: '🔙 Zpět',
    publish: '📝 Zašlete Brigádu'
  },
  temporaryWorkContactPermissionText:
    'Poskytněte mi prosím své kontaktní údaje pomocí tlačítka 👇:',
  temporaryWorkStep1Text:
    '💬 <b>Zveřejňujeme oznámení Brigády.</b>\n\n1️⃣ <b>Napište nadpis reklamy:</b>',
  temporaryWorkStep2Text:
    '💬 <b>Zveřejňujeme oznámení Brigády.</b>\n\n2️⃣ <b>Vyberte kategorii práce:</b>',
  temporaryWorkStep3Text:
    '💬 <b>Zveřejňujeme oznámení Brigády.</b>\n\n3️⃣ <b>Vyberte místo:</b>',
  temporaryWorkStep4Text: `💬 <b>Zveřejňujeme oznámení Brigády.</b>\n
4️⃣ <bNapište svůj reklamní text.</b>

📝 Doporučuji, abyste do textu zahrnuli následující informace:

✔️ Informace o pracovišti
✔️ Kdo to dělá a jaké jsou požadavky
✔️ Co nabízíte, jaké jsou podmínky
✔️ Jaký výplatní list
✔️ Kdy začít a jaké trvání práce`,

  temporaryWorkStep5Text: `💬 <b>Zveřejňujeme oznámení Brigády.</b>\n
5️⃣ <b>Zkontrolujte text reklamy. Pokud je vše v pořádku, klikněte na tlačítko Publikovat:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  temporaryWorkSuccessMessagePart1:
    '✅ Úspěšné publikování!\n\n✔️ Vaše reklama byla úspěšně odeslána uživatelům.\n',
  temporaryWorkSuccessMessagePart2: '✔️ Vaše reklama byla uložena 48 hodin.\n',

  temporaryWorkPreparedText: {
    draftText: '✅ Obsah reklamy\n',
    draftInfo: '\n\n✅ Informace\n',
    draftCategorie: '<b>Kategorie:</b> ',

    draftLocation: '\n<b>Umístění:</b> ',
    draftFirstName: '\n\n<b>👤 Kontakt:</b> ',
    draftPhoneNumber: '\n<b>☎️ Telefon:</b> '
  },
  showLastTemporaryWorkStrings: {
    noCategoriesSelected:
      '<i>⚠️ Ve vašem nastavení nejsou vybrány žádné kategorie!</i>',
    noLocationsSelected:
      '<i>⚠️ Ve vašem nastavení nebylo vybráno žádné místo!</i>',
    noRelevantItems:
      '⚠️ Za posledních 48 hodin neodpovídají vašim požadavkům žádné reklamy',
    reportQuantitySent:
      ' zpráv bylo vám zasláno podle vašeho aktuálního nastavení.'
  },
  //=================================================================================

  //-------------- JOB MENU -------------------//
  jobMenuIcon: '🧳 ',
  jobMenuMessage: `<b>Práce:</b>`,
  jobSubscribeMessage:
    '✅ Zaregistrovali jste se na oznámení o zaměstnání. Robot vám taková oznámení pravidelně zasílá.',
  jobUnSubscribeMessage:
    '⭕️ Vaše předplatné upozornění na práci bylo zrušeno. Robot vám taková oznámení nebude pravidelně zasílat.',
  jobMenuOptions: {
    subscribe: 'Dostávat oznámení o oficiální práci',
    getLastjob: '🔄 Pracovní místa - nejnovější reklamy',
    back: '🔙 Zpět',
    publish: '📝 Zadejte práci'
  },
  jobContactPermissionText:
    'Pro zveřejnění mi prosím poskytněte své kontaktní informace pomocí tlačítka 👇:',
  jobStep1Text:
    '💬 <b>Vydáváme oznámení o zaměstnání.</b>\n\n1️⃣ <b>Napište nadpis reklamy:</b>',
  jobStep2Text: `💬 <b>Vydáváme oznámení o zaměstnání.</b>\n
  2️⃣ <b>Napište svůj reklamní text.</b>

📝 Doporučuji, abyste do textu zahrnuli následující informace:

✔️ Informace o pracovišti
✔️ Kdo to dělá a jaké jsou požadavky
✔️ Co nabízíte, jaké jsou podmínky
✔️ Jaký výplatní list
✔️ Kdy začít a jaké trvání práce`,

  jobStep3Text: `💬 <b>Vydáváme oznámení o zaměstnání.</b>\n
3️⃣ <b>Zkontrolujte text reklamy. Pokud je vše v pořádku, klikněte na tlačítko Publikovat:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  jobSuccessMessagePart1:
    '✅ Úspěšné publikování!\n\n✔️ Vaše reklama byla úspěšně odeslána uživatelům.\n',
  jobSuccessMessagePart2: '✔️ Vaše reklama byla uložena po dobu 1 týdne.\n',

  jobPreparedText: {
    draftText: '✅ Obsah reklamy\n',
    draftFirstName: '\n\n<b>👤 Kontakt:</b> ',
    draftPhoneNumber: '\n<b>☎️ Telefon:</b> '
  },
  showLastJobStrings: {
    noRelevantItems: '⚠️ V minulém týdnu nejsou žádné příspěvky.',
    reportQuantitySent: ' иyly vám zaslány zprávy o oficiální práci.'
  },
  //=================================================================================

  //-------------- TRANSPORTATION MENU -------------------//
  transportationMenuIcon: '🚌 ',
  transportationMenuMessage: `<b>Dopravci:</b>`,
  transportationSubscribeMessage:
    '✅ Jste přihlášeni k odběru upozornění o přepravě, řidiče připravené vzít cestující na cestu. Robot vám taková oznámení pravidelně zasílá.',
  transportationUnSubscribeMessage:
    '⭕️ Předplatné upozornění o přepravě bylo zrušeno. Robot vám taková oznámení nebude pravidelně zasílat.',
  transportationMenuOptions: {
    subscribe: 'Dostávat oznámení o přepravě',
    getLastTransportation: '🔄 Dopravci - nejnovější reklamy',
    back: '🔙 Zpět',
    publish: '📝 Zašlete oznámení'
  },
  transportationContactPermissionText:
    'Chcete-li zveřejnit oznámení o trase, poskytněte mi prosím své kontaktní informace pomocí tlačítka 👇:',
  transportationStep1Text:
    '💬 <b>Vydáváme oznámení o trase.</b>\n\n1️⃣ <b>Napište nadpis reklamy:</b>',
  transportationStep2Text: `💬 <b>Vydáváme oznámení o trase.</b>\n
  2️⃣ <b>Napište svůj reklamní text.</b>

📝 Doporučuji, abyste do textu zahrnuli následující informace:

✔️ Datum cesty
✔️ Místo odjezdu
✔️ Cíl
✔️ Na jakých místech jste kromě těchto bodů připraveni vzít cestující`,

  transportationStep3Text: `💬 <b>Vydáváme oznámení o trase.</b>\n
3️⃣ <b>Zkontrolujte text reklamy. Pokud je vše v pořádku, klikněte na tlačítko Publikovat:</b>\n➖➖➖➖➖➖➖➖➖➖➖\n\n`,

  transportationSuccessMessagePart1:
    '✅ Úspěšné publikování!\n\n✔️ Vaše reklama byla úspěšně odeslána uživatelům.\n',
  transportationSuccessMessagePart2:
    '✔️ Vaše reklama byla uložena po dobu 1 týdne.\n',

  transportationPreparedText: {
    draftText: '✅ Obsah reklamy\n',
    draftFirstName: '\n\n<b>👤 Kontakt:</b> ',
    draftPhoneNumber: '\n<b>☎️ Telefon:</b> '
  },
  showLastTransportationStrings: {
    noRelevantItems:
      '⚠️ V minulém týdnu nejsou k dispozici žádná oznámení o trase.',
    reportQuantitySent: ' vám byly zaslány zprávy o trasách.'
  },
  //=================================================================================
  //---------------- EDIT CATEGORIES -----------------//
  editCategoriesMessage: `💬 <b>VÝBĚR KATEGORIE PRÁCE:</b>
  Vyberte požadované kategorie:`,

  jobCategories: {
    administration: 'Administrativa',
    manual: 'Manuální',
    services: 'Obchod-služby',
    other: 'Ostatní'
  },

  //---------------- EDIT LANGUAGES -----------------//
  editLanguagesMessage: `💬 <b>VÝBER JAZYKA:</b>
  Vyberte jazyk:`,

  languages: {
    languageUa: 'Українська 🇺🇦',
    languageCz: 'Czech 🇨🇿',
    languageEn: 'English 🇺🇸',
    languageRu: 'Русский 🇷🇺'
  },

  //------------------ EDIT LOCATIONS ---------------//
  editLocationsMessage: `💬 <b>VÝBĚR MÍSTA:</b>
  Vyberte požadovaná místa`,

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
    firstPart: `💬 <b>Zpráva o vašem nastavení:</b>`,
    temporaryWorkSubscribed:
      '✅ <b>Brigády - Byli jste přihlášeni k odběru oznámení s následujícím nastavením:</b>',
    temporaryWorkUnSubscribed:
      '⭕️ <b>Brigády - Nejste přihlášeni k odběru oznámení</b>',
    jobSubscribed: '✅ <b>Job - Jste přihlášeni k odběru oznámení práce</b>',
    jobUnSubscribed:
      '⭕️ <b>Job - Nejste přihlášeni k odběru oznámení práce</b>',
    noCategoriesSelected:
      '<i>⚠️ Ve vašem nastavení nejsou vybrány žádné kategorie!</i>',
    suchCategoriesSelected: '📌 <b>Kategorie:</b>',
    checked: '✔️ ',
    bell: '🔔 ',
    noLocationsSelected:
      '<i>⚠️ Ve vašem nastavení nebylo vybráno žádné místo!</i>',
    suchLocationsSelected: '🗺  <b>Místa:</b>',
    transportationSubscribed:
      '✅ <b>Dopravci - Jste přihlášeni k odběru oznámení dopravce</b>',
    transportationUnSubscribed:
      '⭕️ <b>Dopravci - Nejste přihlášeni k upozornění dopravce</b>'
  },

  //------------------ HELP MESSAGE ----------
  helpMessage: `💬 <b>Na co je to bot?</b>

🧰 Bot vám zašle aktuální volná pracovní místa v České republice (Brigády) pro vybrané kategorie a místa. 

🧳 Boty vám zašlou aktuální pracovní nabídky pro cizince v České republice, a to i od agentů a přímých zaměstnavatelů.

🚌 Bot vám pošle aktuální trasy pro cestující a řidiče, kteří jsou připraveni vzít cestující.

✅ V nastavení můžete aktivovat nebo odhlásit zvlášť pro každou z těchto sekcí.

✅ Nyní je možné požádat o nejnovější reklamy v každé sekci.

<b>Počkejte na další verzi bota:</b>
🏠 <i>Sekce bydlení</i>

<b>Pomozte vylepšit!</b>
Pokud najdete chybu nebo máte nějaké nápady nebo návrhy, jak zlepšit funkčnost robota, napište nám.

<b>Vývoj a podpora:</b> @kshvab
v2.0.1
`,

  shareFirstMsg: '💬 Sdílejte bot s přáteli, klikněte na odkazy: ',
  shareLinkMsg: 'https://t.me/czech_infobot',
  shareBotUsernameMsg: '@czech_infobot',

  newVersionMsg: `💬 <b>Bot verze byla aktualizována</b>
<i>Aktuální verze: v2.0.1</i>
`
};
