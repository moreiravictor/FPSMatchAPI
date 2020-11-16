const express = require('express');
const PlayerKillMatchController = require('./controllers/PlayerKillMatchController');
const PlayerTeamMatchController = require('./controllers/PlayerTeamMatchController');
const WeaponController = require('./controllers/WeaponController');
const routes = express.Router();

routes.post('/weapons', WeaponController.create);
routes.get('/weapons', WeaponController.get);
routes.get('/match/players', PlayerTeamMatchController.get);
routes.get('/players/kill', PlayerKillMatchController.get);

module.exports = routes;