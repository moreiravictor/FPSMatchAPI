const { Model, DataTypes } = require('sequelize');

class Player extends Model {

    static init(sequelize) {
        super.init({
            player_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
            player_name: DataTypes.STRING,
            email: DataTypes.STRING,
            birth_data: DataTypes.DATE,
        }, {sequelize})
    }

}

module.exports = Player;