const { Model, DataTypes } = require('sequelize');
const PlayerTeamMatch = require('./PlayerTeamMatch');

class Team extends Model {
    static init(sequelize) {
        super.init({
            team_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            team_name: DataTypes.STRING
        }, {sequelize})
    }

    static associate(models) {
        this.hasMany(models.PlayerTeamMatch, {foreignKey: 'team_id', as: 'players_teams_matches'});
    }
}
module.exports = Team;