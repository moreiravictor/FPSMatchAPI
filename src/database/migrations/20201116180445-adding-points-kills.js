'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('kills', 'point_amount', {type: Sequelize.INTEGER, allowNull: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('kills', 'point_amount');
  }
};
