const { DataTypes } = require('sequelize');
const database = require('../../database');
const Campaign = require('./campaign');

const userType = database.define('user_types', {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    }
},{
  underscored: true
});

Campaign.sync();
module.exports = userType;