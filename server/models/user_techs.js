const Sequelize = require('sequelize');

const db = require('../config/database');

const UsersTechs = db.define('user_techs', {
  userId: {
    type: Sequelize.INTEGER,
  },
  techId: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
});

module.exports = UsersTechs;
