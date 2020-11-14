const Sequelize = require('sequelize');
const database_config  = require('../config/database');

const Weapon  = require('../models/Weapon');

const connection = new Sequelize(database_config);

Weapon.init(connection);

module.exports = connection;