const Sequelize = require('sequelize');

const db = require('../config/database');

const WishModel = db.define('matchings', {
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
    type: Sequelize.STRING,
    allowNull: false,
  },
  swipedUserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  swipedUserStatus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = WishModel;
