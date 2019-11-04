const Sequelize = require('sequelize');

const db = require('../config/database');

const UsersWishes = db.define('user_wishes', {
  userId: {
    type: Sequelize.INTEGER,
  },
  wishId: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: false,
});

module.exports = UsersWishes;
