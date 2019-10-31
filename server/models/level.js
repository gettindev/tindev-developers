const Sequelize = require('sequelize');

const db = require('../config/database');

const LevelModel = db.define('levels', {
  id: {
    // field: 'levelId',
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


module.exports = LevelModel;
