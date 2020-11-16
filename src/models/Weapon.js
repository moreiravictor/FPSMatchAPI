const { Model, DataTypes } = require('sequelize');

class Weapon extends Model {

    static init(sequelize) {
        super.init({
            weapon_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            weapon_name: DataTypes.STRING,
            damage: DataTypes.INTEGER,
            recoil: DataTypes.INTEGER,
            magazine: DataTypes.INTEGER,
            bullets_magazine: DataTypes.INTEGER
        }, {sequelize})
    }

}

module.exports = Weapon;