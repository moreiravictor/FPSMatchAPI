const express = require('express');
const KillController = require('./controllers/KillController');
const PlayerTeamMatchController = require('./controllers/PlayerTeamMatchController');
const TeamsController = require('./controllers/TeamController');
const WeaponController = require('./controllers/WeaponController');
const routes = express.Router();

routes.post('/weapons', WeaponController.create);
routes.get('/weapons', WeaponController.get);

routes.get('/teams', TeamsController.getTeamDomains);
routes.get('/kills', KillController.getKillPoints);

routes.get('/match/best_player/:match_id', PlayerTeamMatchController.getMatchBestPlayer);
routes.get('/match/team/best_player/:match_id', PlayerTeamMatchController.getMatchTeamsBestPlayers);

module.exports = routes;