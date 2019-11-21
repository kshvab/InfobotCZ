const TelegramBot = require('node-telegram-bot-api');
const config = require('../../config');

const bot = new TelegramBot(config.TELEGRAM_TOKEN, { polling: true });

module.exports = bot;
