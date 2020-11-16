'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('weapons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      weapon_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      damage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recoil: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      magazine: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      bullets_magazine: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('weapons');
  }
};
