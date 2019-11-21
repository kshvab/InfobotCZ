const mongoose = require('mongoose');

const draftSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    telegramUserId: String,
    user_id: String,
    firstName: String,
    lastName: String,
    language: String,
    phoneNumber: String,

    title: String,
    section: String, //temporaryWork, job, realty, transportation
    categorie: String, //administration, manual, services, other
    location: String,
    text: String,
    preparedText: String
  },
  {
    timestamps: true
  }
);

let draft = mongoose.model('draft', draftSchema);

module.exports = draft;
