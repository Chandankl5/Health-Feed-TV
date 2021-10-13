const Sequelize = require("sequelize");

const sequelize = require("../db/index").sequelize;

const Channel = sequelize.define("channel", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tag: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdOn: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Channel;
