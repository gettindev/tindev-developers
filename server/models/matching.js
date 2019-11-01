const Sequelize = require('sequelize');

const db = require('../config/database');

const { Op } = Sequelize;

const Matchings = db.define('matchings', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  currentUserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  currentUserStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  swipedUserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  swipedUserStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = Matchings;
