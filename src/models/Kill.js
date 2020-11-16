const { Model, DataTypes } = require('sequelize');

class Kill extends Model {
    static init(sequelize) {
        super.init({
            kill_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            kill_name: DataTypes.STRING,
            point_amount: DataTypes.INTEGER
        }, {sequelize})
    }

    static associate(models) {
        this.hasMany(models.PlayerKillMatch, {foreignKey: 'kill_id', as: 'players_kills_matches'});
    }
}
module.exports = Kill;