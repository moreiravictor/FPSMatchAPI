const express = require('express');
const KillController = require('./controllers/KillController');
const MatchController = require('./controllers/MatchController');
const PlayerTeamMatchController = require('./controllers/PlayerTeamMatchController');
const TeamsController = require('./controllers/TeamController');
const WeaponController = require('./controllers/WeaponController');
const routes = express.Router();

routes.post('/weapons', WeaponController.create);
routes.get('/weapons', WeaponController.get);

routes.get('/teams', TeamsController.getTeamDomains);
routes.get('/kills', KillController.getKillPoints);

routes.get('/match/best_player/:match_id', PlayerTeamMatchController.getMatchBestPlayer);
routes.get('/match/teams/best_player/:match_id', PlayerTeamMatchController.getMatchTeamsBestPlayers);
routes.get('/match/teams/:match_id', PlayerTeamMatchController.getMatchTeams);
routes.get('/match/winner/:match_id', MatchController.getWinnerTeam);

module.exports = routes;