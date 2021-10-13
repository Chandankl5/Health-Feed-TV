const debug = require('debug')('db');
const dbConfig = require('../../../config/index').dbConfig;
const Sequelize = require('sequelize');

const { database, host, username, password, dialect  } = dbConfig;

const sequelize = new Sequelize(database, username, password, {
    dialect,
    host
});


sequelize.authenticate().then(() => {

  debug('Database Connected')

}).catch((error) => {

    debug('Error connecting Database', error)
})

const db = {};

db.sequelize = sequelize;

module.exports = db;