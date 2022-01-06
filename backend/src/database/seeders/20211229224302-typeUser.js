'use strict';
const { DataTypes } = require('sequelize');
const { v4 } = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let types = ['ong','pessoa'];
    let count = types.length;
    let data = []
    while(count--)  {
      data.push({
        id: count+1,
        name: types[count],
        created_at: new Date(),
        updated_at: new Date()
      })
    }
    await queryInterface.bulkInsert('user_types', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_types', null, {});
  }
};
