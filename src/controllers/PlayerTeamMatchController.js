const PlayerTeamMatchService = require('../service/PlayerTeamMatchService');

module.exports = {
    async getMatchBestPlayer(req, res) {
        const best_player = await PlayerTeamMatchService.findMatchBestPlayer(req.params);
        return res.json(best_player);
    },
    async getMatchTeamsBestPlayers(req, res) {
        const best_players = await PlayerTeamMatchService.findTeamsBestPlayers(req.params);
        return res.json(best_players);
    },
    async getMatchTeams(req, res) {
        const teams = await PlayerTeamMatchService.findTeamPlayers(req.params);
        return res.json(teams);
    }

};