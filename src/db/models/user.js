const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    telegramUserId: String,
    firstName: String,
    lastName: String,
    userName: String,
    language: String,
    bio: String,

    workCategories: {
      administration: {
        type: Boolean,
        default: 'true'
      },
      manual: {
        type: Boolean,
        default: 'true'
      },
      services: {
        type: Boolean,
        default: 'true'
      },
      other: {
        type: Boolean,
        default: 'true'
      }
    },
    sections: {
      temporaryWork: {
        type: Boolean,
        default: 'true'
      },
      job: {
        type: Boolean,
        default: 'true'
      },
      realty: {
        type: Boolean,
        default: 'true'
      },
      transportation: {
        type: Boolean,
        default: 'true'
      }
    },
    locations: {
      praha: {
        praha1: { type: Boolean, default: 'true' },
        praha2: { type: Boolean, default: 'true' },
        praha3: { type: Boolean, default: 'true' },
        praha4: { type: Boolean, default: 'true' },
        praha5: { type: Boolean, default: 'true' },
        praha6: { type: Boolean, default: 'true' },
        praha7: { type: Boolean, default: 'true' },
        praha8: { type: Boolean, default: 'true' },
        praha9: { type: Boolean, default: 'true' },
        praha10: Boolean
      },
      stredoceskyKraj: {
        benesov: { type: Boolean, default: 'false' },
        beroun: { type: Boolean, default: 'false' },
        kladno: { type: Boolean, default: 'false' },
        kolin: { type: Boolean, default: 'false' },
        kutnaHora: { type: Boolean, default: 'false' },
        melnik: { type: Boolean, default: 'false' },
        mladaBoleslav: { type: Boolean, default: 'false' },
        nymburk: { type: Boolean, default: 'false' },
        prahaVychod: { type: Boolean, default: 'false' },
        prahaZapad: { type: Boolean, default: 'false' },
        pribram: { type: Boolean, default: 'false' },
        rakovnik: Boolean
      },
      jihoceskyKraj: {
        ceskeBudejovice: { type: Boolean, default: 'false' },
        ceskyKrumlov: { type: Boolean, default: 'false' },
        jindrichuvHradec: { type: Boolean, default: 'false' },
        pisek: { type: Boolean, default: 'false' },
        prachatice: { type: Boolean, default: 'false' },
        strakonice: { type: Boolean, default: 'false' },
        tabor: Boolean
      },
      plzenskyKraj: {
        domazlice: { type: Boolean, default: 'false' },
        klatovy: { type: Boolean, default: 'false' },
        plzen: { type: Boolean, default: 'false' },
        plzenJih: { type: Boolean, default: 'false' },
        plzenSever: { type: Boolean, default: 'false' },
        rokycany: { type: Boolean, default: 'false' },
        tachov: Boolean
      },
      karlovarskyKraj: {
        cheb: { type: Boolean, default: 'false' },
        karlovyVary: { type: Boolean, default: 'false' },
        sokolov: Boolean
      },
      usteckyKraj: {
        decin: { type: Boolean, default: 'false' },
        chomutov: { type: Boolean, default: 'false' },
        litomerice: { type: Boolean, default: 'false' },
        louny: { type: Boolean, default: 'false' },
        most: { type: Boolean, default: 'false' },
        teplice: { type: Boolean, default: 'false' },
        ustiNadLabem: Boolean
      },
      libereckyKraj: {
        ceskaLipa: { type: Boolean, default: 'false' },
        jablonecNadNisou: { type: Boolean, default: 'false' },
        liberec: { type: Boolean, default: 'false' },
        semily: Boolean
      },
      kralovehradeckyKraj: {
        hradecKralove: { type: Boolean, default: 'false' },
        jicin: { type: Boolean, default: 'false' },
        nachod: { type: Boolean, default: 'false' },
        rychnovNadKneznou: { type: Boolean, default: 'false' },
        trutnov: Boolean
      },
      pardubickyKraj: {
        chrudim: { type: Boolean, default: 'false' },
        pardubice: { type: Boolean, default: 'false' },
        svitavy: { type: Boolean, default: 'false' },
        ustiNadOrlici: Boolean
      },
      vysocina: {
        pelhrimov: { type: Boolean, default: 'false' },
        havlickuvBrod: { type: Boolean, default: 'false' },
        jihlava: { type: Boolean, default: 'false' },
        trebic: { type: Boolean, default: 'false' },
        zdarNadSazavou: Boolean
      },
      jihomoravskyKraj: {
        blansko: { type: Boolean, default: 'false' },
        brno: { type: Boolean, default: 'false' },
        brnoVenkov: { type: Boolean, default: 'false' },
        breclav: { type: Boolean, default: 'false' },
        hodonin: { type: Boolean, default: 'false' },
        vyskov: { type: Boolean, default: 'false' },
        znojmo: Boolean
      },
      olomouckyKraj: {
        prostejov: { type: Boolean, default: 'false' },
        olomouc: { type: Boolean, default: 'false' },
        prerov: { type: Boolean, default: 'false' },
        sumperk: { type: Boolean, default: 'false' },
        jesenik: Boolean
      },
      moravskoslezskyKraj: {
        bruntal: { type: Boolean, default: 'false' },
        frydekMistek: { type: Boolean, default: 'false' },
        karvina: { type: Boolean, default: 'false' },
        novyJicin: { type: Boolean, default: 'false' },
        opava: { type: Boolean, default: 'false' },
        ostrava: Boolean
      },
      zlinskyKraj: {
        zlin: { type: Boolean, default: 'false' },
        kromeriz: { type: Boolean, default: 'false' },
        uherskeHradiste: { type: Boolean, default: 'false' },
        vsetin: Boolean
      }
    }
  },
  {
    timestamps: true
  }
);

let user = mongoose.model('user', userSchema);

module.exports = user;
