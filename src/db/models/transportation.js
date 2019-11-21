const mongoose = require('mongoose');
//source
const transportationSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    text: String
  },
  {
    timestamps: true
  }
);

let transportation = mongoose.model('transportation', transportationSchema);

module.exports = transportation;
