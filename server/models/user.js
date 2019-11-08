const Sequelize = require('sequelize');

const db = require('../config/database');

const LevelModel = require('../models/level');

const User = db.define('users', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  token: {
    type: Sequelize.STRING,
  },
  pseudo: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  levelId: {
    type: Sequelize.INTEGER,
  },
  photo: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
  mail: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  createdAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});
module.exports = User;
