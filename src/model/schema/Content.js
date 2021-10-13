const Sequelize = require("sequelize");

const sequelize = require("../db/index").sequelize;

const Content = sequelize.define("content", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
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
  },
  modifiedOn: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  trackUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  trackExtension: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  published: {
    type: Sequelize.BOOLEAN,
    // allowNull: false
  },
  source: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  trackStart: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  trackEnd: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  trackSize: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Content;
