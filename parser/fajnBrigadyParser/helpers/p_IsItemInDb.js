const dbTemporaryWork = require('../../../src/db/models/temporaryWork');

function pIsItemInDb(sourceUrl) {
  return new Promise(function(resolve, reject) {
    dbTemporaryWork.findOne({ sourceUrl: sourceUrl }, function(
      err,
      temporaryWork
    ) {
      if (err) reject(err);
      if (temporaryWork) resolve(true);
      else resolve(false);
    });
  });
}

module.exports = pIsItemInDb;
