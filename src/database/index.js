const Sequelize = require('sequelize');
const database_config  = require('../config/database');
const PlayerTeamMatch = require('../models/PlayerTeamMatch');
const PlayerKillMatch = require('../models/PlayerKillMatch');
const Player = require('../models/Player');
const Team = require('../models/Team');
const Match = require('../models/Match');
const Weapon  = require('../models/Weapon');
const Kill = require('../models/Kill');

const connection = new Sequelize(database_config);

Weapon.init(connection);
Player.init(connection);
Team.init(connection);
Match.init(connection);
Kill.init(connection);
PlayerTeamMatch.init(connection);
PlayerKillMatch.init(connection);

Player.associate(connection.models);
Team.associate(connection.models);
Match.associate(connection.models);
Kill.associate(connection.models);
PlayerTeamMatch.associate(connection.models);
PlayerKillMatch.associate(connection.models);

module.exports = connection;