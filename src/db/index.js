var mongoose = require('mongoose');

var state = {
  db: null
};

module.exports.connect = function(url, done) {
  if (state.db) {
    console.info(
      '=====> Connection to the database already existed, I use it.'
    );
    //return done;
    return console.info(
      '=====> Connection to the database already existed, I use it.'
    );
  }

  mongoose.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) {
      return console.log('ERROR: Не можу підключитися до бази... ' + err);
    }

    state.db = db;
    console.log('=====> Successfully connected to database.');
    return done;
  });
};
