const PlayerTeamMatch = require('../models/PlayerTeamMatch')

module.exports = {
    async get(req, res) {
        const playerTeamMatch = await PlayerTeamMatch.findAll({include: {association: 'players'}});
        return res.json(playerTeamMatch);
    }

};