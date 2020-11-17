const Match = require('../models/Match');
const MatchQuery = require('../query/MatchQuery');
const PlayerTeamMatchService = require("../service/PlayerTeamMatchService");

async function findWinnerTeam(match_id) {
    const winner_team = await Match.findByPk(match_id, MatchQuery.winnerTeamPlayers);
    return winner_team;
}

module.exports = {
    findWinnerTeam
}