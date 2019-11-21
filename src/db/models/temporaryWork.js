const mongoose = require('mongoose');
//source
const temporaryWorkSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    source: String, //fajnBrigady, fromUser
    sourceUrl: String,
    idInzeratu: String,
    categorie: String,
    location: String,
    text: String
  },
  {
    timestamps: true
  }
);

let temporaryWork = mongoose.model('temporaryWork', temporaryWorkSchema);

module.exports = temporaryWork;
