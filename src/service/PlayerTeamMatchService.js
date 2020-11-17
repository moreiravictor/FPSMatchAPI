const PlayerTeamMatch = require("../models/PlayerTeamMatch");
const PlayerTeamMatchQuery = require("../query/PlayerTeamMatchQuery");

async function findMatchBestPlayer(params) {
    const { match_id } = params;
    const players_kills = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKills(match_id));
    const best_player = findBestPlayer(players_kills);
    return best_player;
}

async function findTeamsBestPlayers(params) {
    const { match_id } = params;

    const players_kills_CT = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKillsTeam(match_id, 1));
    const players_kills_TR = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKillsTeam(match_id, 2));

    let best_player_CT = findBestPlayer(players_kills_CT);
    let best_player_TR = findBestPlayer(players_kills_TR);

    return {counter_terrorists: best_player_CT , terrorists: best_player_TR};
}

const findBestPlayer = (players_kills) => {
    const players_points = players_kills.map(player => getPointsInfo(player));
    const best_player = players_points.reduce((prev, current) => (prev.points > current.points) ? prev : current);
    delete best_player.player.dataValues.kills;
    delete best_player.points;
    return best_player;
}

function getPointsInfo(player) {
    let player_info = {player: player.player_data, points: 0};
    player_info.points = sumPoints(player.player_data.kills);
    return player_info;
}

function sumPoints(kills) {
    return kills.reduce((accum, kill) => accum + kill.kill_type.point_amount, 0);
}
module.exports = {
    findMatchBestPlayer,
    findTeamsBestPlayers
}