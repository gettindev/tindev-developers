const Sequelize = require('sequelize');

const db = require('../config/database');

const User = db.define('USER', {
  id: {
    // field: 'Userid',
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
    allowNull: true,
  },
  experience: {
    type: Sequelize.STRING,
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
}, { freezeTableName: true });
module.exports = User;
