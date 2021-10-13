const dbConfig = require('./database');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const dbenvConfig = dbConfig[env];

module.exports = { dbConfig: dbenvConfig };