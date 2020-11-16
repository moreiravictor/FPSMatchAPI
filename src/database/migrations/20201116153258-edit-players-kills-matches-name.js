'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.renameTable('playes_kills_matches', 'players_kills_matches');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('players_kills_matches', 'playes_kills_matches');

  }
};
