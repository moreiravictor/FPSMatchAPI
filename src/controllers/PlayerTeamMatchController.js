const PlayerTeamMatch = require('../models/PlayerTeamMatch');
const PlayerTeamMatchQuery = require('../query/PlayerTeamMatchQuery');
const PlayerTeamMatchService = require('../service/PlayerTeamMatchService');

module.exports = {
    async get(req, res) {
        const playerTeamMatch = await PlayerTeamMatch.findAll({include: {association: 'player_data'}});
        return res.json(playerTeamMatch);
    }, 
    async getBestPlayer(req, res) {
        const { match_id } = req.params;
        const players_kills = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKills(match_id));
        const best_player = PlayerTeamMatchService.findBestPlayer(players_kills);
        return res.json(best_player);
    }

};