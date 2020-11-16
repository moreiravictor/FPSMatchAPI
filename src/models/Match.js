const { Model, DataTypes } = require('sequelize');
const PlayerTeamMatch = require('./PlayerTeamMatch');

class Match extends Model {
    static init(sequelize) {
        super.init({
            match_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            match_date: DataTypes.DATE,
            match_time: DataTypes.TIME,  
            winner_team: DataTypes.INTEGER
        }, {sequelize})
    }

    static associate(models) {
        this.hasMany(models.PlayerTeamMatch, {foreignKey: 'match_id', as: 'players_teams_matches'});
        this.hasMany(models.PlayerKillMatch, {foreignKey: 'match_id', as: 'players_kills_matches'});
    }
}
module.exports = Match;