'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.renameTable('playes_teams_matches', 'players_teams_matches');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('players_teams_matches', 'playes_teams_matches');

  }
};
