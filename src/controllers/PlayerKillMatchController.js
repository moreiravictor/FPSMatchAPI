const Player = require('../models/Player');
const PlayerKillMatch = require('../models/PlayerKillMatch')

module.exports = {
    async get(req, res) {
        const players_kills = await PlayerKillMatch.findAll();
        return res.json(players_kills);
    }

};