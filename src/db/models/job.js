const mongoose = require('mongoose');
//source
const jobSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    text: String
  },
  {
    timestamps: true
  }
);

let job = mongoose.model('job', jobSchema);

module.exports = job;
