const {Model, DataTypes } = require('sequelize');

class PlayerTeamMatch extends Model {
    static init(sequelize) {
        super.init({
            player_team_match_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            player_id: {
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
            team_id: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                references: {
                    model: 'team',
                    key: 'team_id'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
        }, {sequelize, tableName: 'players_teams_matches'})
    }

    static associate(models) {
        this.belongsTo(models.Match, {foreignKey: 'match_id', targetKey: 'match_id',as: 'matches'});
        this.belongsTo(models.Player, {foreignKey: 'player_id', targetKey: 'player_id',as: 'players'});
        this.belongsTo(models.Team, {foreignKey: 'team_id', targetKey: 'team_id',as: 'teams'});
    }
}

module.exports = PlayerTeamMatch;