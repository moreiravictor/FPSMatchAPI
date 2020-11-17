const PlayerKillMatch = require('../models/PlayerKillMatch');
const PlayerKillMatchQuery = require('../query/PlayerKillMatchQuery');

module.exports = {
    async get(req, res) {
        const players_kills = await PlayerKillMatch.findAll();
        return res.json(players_kills);
    },
    async getHeadShots(req, res) {
        const {match_id} = req.params;
        const headshots = await PlayerKillMatch.findAll(PlayerKillMatchQuery.headshots(match_id));
        return res.json(headshots);
    }

};