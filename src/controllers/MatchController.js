const MatchService = require("../service/MatchService");

module.exports = {
    async getWinnerTeam(req, res) {
        const {match_id}  = req.params;
        const winner_team = await MatchService.findWinnerTeam(match_id);
        return res.json(winner_team);
    }
}