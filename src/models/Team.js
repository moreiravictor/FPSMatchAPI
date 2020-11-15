const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Team extends Model {
    static init(sequelize) {
        super.init({
            team_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            team_name: DataTypes.STRING
        }, sequelize)
    }
}
module.exports = Team;