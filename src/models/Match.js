const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Match extends Model {
    static init(sequelize) {
        super.init({
            match_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            match_date: DataTypes.DATE,
            match_time: DataTypes.TIME,  
            winner_team: DataTypes.INTEGER
        }, sequelize)
    }
}
module.exports = Match;