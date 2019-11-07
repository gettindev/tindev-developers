const Sequelize = require('sequelize');

const db = require('../config/database');

const Messages = db.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
  },
  matchingId: {
    type: Sequelize.INTEGER,
  },
  sender: {
    type: Sequelize.INTEGER,
  },
  receiver: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Messages;
