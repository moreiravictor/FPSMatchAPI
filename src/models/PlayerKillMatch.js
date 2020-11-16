const {Model, DataTypes } = require('sequelize');

class PlayerKillMatch extends Model {
    static init(sequelize) {
        super.init({
            player_kill_match_id: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true
            },
            killer_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                references: {
                    model: 'player',
                    key: 'player_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            killed_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                references: {
                    model: 'player',
                    key: 'player_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            match_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                references: {
                    model: 'match',
                    key: 'match_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            kill_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                references: {
                    model: 'kills',
                    key: 'kill_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
        }, {sequelize, tableName: 'players_kills_matches'})
    }

    static associate(models) {
        this.belongsTo(models.Match, {foreignKey: 'match_id', targetKey: 'match_id', as: 'matches'});
        this.belongsTo(models.Player, {foreignKey: 'killer_id', targetKey: 'player_id', as: 'killer'});
        this.belongsTo(models.Player, {foreignKey: 'killed_id', targetKey: 'player_id', as: 'killed'});
        this.belongsTo(models.Kill, {foreignKey: 'kill_id', targetKey: 'kill_id', as: 'kills'});
    }
}

module.exports = PlayerKillMatch;