const sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Kill extends Model {
    static init(sequelize) {
        super.init({
            kill_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            kill_name: DataTypes.STRING,
            point_amount: DataTypes.INTEGER
        }, sequelize)
    }
}
module.exports = Kill;