const { Model, DataTypes } = require('sequelize');

class Player extends Model {

    static init(sequelize) {
        super.init({
            player_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            player_name: DataTypes.STRING,
            email: DataTypes.STRING,
            birth_date: DataTypes.DATE,
        }, {sequelize})
    }

    static associate(models) {
        this.hasMany(models.PlayerTeamMatch, {foreignKey: 'player_id', as: 'players_teams_matches'});
        this.hasMany(models.PlayerKillMatch, {foreignKey: 'killer_id', as: 'kills'});
        this.hasMany(models.PlayerKillMatch, {foreignKey: 'killed_id', as: 'deaths'});
    }

}

module.exports = Player;