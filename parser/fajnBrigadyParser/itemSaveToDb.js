const mongoose = require('mongoose');
const dbTemporaryWork = require('../../src/db/models/temporaryWork');

function itemSaveToDb(item) {
  return new Promise(function(resolve, reject) {
    dbTemporaryWork.findOne({ idInzeratu: item.idInzeratu }, function(
      err,
      temporaryWork
    ) {
      if (err) reject(err);
      if (temporaryWork) resolve(null);
      else {
        item._id = new mongoose.Types.ObjectId();
        let newTemporaryWork = new dbTemporaryWork(item);

        newTemporaryWork.save(function(err, result) {
          if (err) reject(err);

          resolve('NEW dbTemporaryWork Added!');
        });
      }
    });
  });
}

module.exports = itemSaveToDb;
