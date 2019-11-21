let fajnBrigadyParser = require('./parser/fajnBrigadyParser');
process.env.NTBA_FIX_319 = 1;

/** Configure a bot */
const config = require('./config');

/** Setup mongoose and start*/

var mongoose = require('mongoose');
var db = require('./src/db');
db.connect(config.DB_URL);

/** Start bot */
require('./src/mainLogic');
console.log('=====> BOT is up and running.');

//----------- Parser Start ---------------//

//fajnBrigadyParser();
