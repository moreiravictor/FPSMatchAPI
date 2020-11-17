const PlayerTeamMatchService = require('../service/PlayerTeamMatchService');

module.exports = {
    async getMatchBestPlayer(req, res) {
        const { match_id } = req.params;
        const best_player = await PlayerTeamMatchService.findMatchBestPlayer(match_id);
        return res.json(best_player);
    },
    async getMatchTeamsBestPlayers(req, res) {
        const { match_id } = req.params;
        const best_players = await PlayerTeamMatchService.findTeamsBestPlayers(match_id);
        return res.json(best_players);
    },
    async getMatchTeams(req, res) {
        const { match_id } = req.params;
        const teams = await PlayerTeamMatchService.findTeamsPlayers(match_id);
        return res.json(teams);
    },
    async getRank(req, res) {
        const { match_id } = req.params;
        const rank = await PlayerTeamMatchService.findRank(match_id);
        return res.json(rank);
    }

};