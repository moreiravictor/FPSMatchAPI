const Player = require('../models/Player');
const PlayerKillMatch = require('../models/PlayerKillMatch')

module.exports = {
    async get(req, res) {
        const playerKillMatch = await PlayerKillMatch.findAll({
            where: [{killer_id: 1, match_id: 1}],
            include: [{association: 'killer'}, {association: 'killed'}]
        });
        const player = await  Player.findAll({
            where: [{player_id: 1}],
            include: [{association: 'deaths'}]
        })
        return res.json(player);
    }

};