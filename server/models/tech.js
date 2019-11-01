const Sequelize = require('sequelize');

const db = require('../config/database');

const TechModel = db.define('techs', {
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

module.exports = TechModel;
