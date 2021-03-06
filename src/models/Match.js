const { Model, DataTypes } = require('sequelize');
const PlayerTeamMatch = require('./PlayerTeamMatch');

class Match extends Model {
    static init(sequelize) {
        super.init({
            match_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            match_date: DataTypes.DATE,
            winner_team: DataTypes.INTEGER
        }, {sequelize})
    }

    static associate(models) {
        this.hasMany(models.PlayerTeamMatch, {foreignKey: 'match_id', as: 'players'});
        this.hasMany(models.PlayerKillMatch, {foreignKey: 'match_id', as: 'players_kills_matches'});
        this.belongsTo(models.Team, {foreignKey: 'winner_team', as: 'team'});
    }
}
module.exports = Match;