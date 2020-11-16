'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('playes_teams_matches', {
      player_team_match_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      player_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'players', key: 'player_id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      match_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'matches', key: 'match_id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'teams', key: 'team_id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('playes_teams_matches');
  }
};
