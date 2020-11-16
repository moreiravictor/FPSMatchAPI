'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      match_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      match_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      winner_team: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'teams', key: 'team_id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
