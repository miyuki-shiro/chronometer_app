'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Timers', [{
      time: 1.30,
      createdAt: '2021-04-20T00:31:18.304Z',
      updatedAt: '2021-04-20T00:31:18.304Z'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Timers', null, {});
  }
};
