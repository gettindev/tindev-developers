const Sequelize = require('sequelize');

const db = require('../config/database');

const WishModel = db.define('wishes', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
});

module.exports = WishModel;
