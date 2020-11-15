'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('playes_kills_matches', {
      player_kill_match_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      killer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'players', key: 'player_id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      killed_id: {
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
      kill_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: 'kills', key: 'kill_id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('playes_kills_matches');
  }
};
