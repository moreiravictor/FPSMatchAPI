const PlayerTeamMatch = require("../models/PlayerTeamMatch");
const PlayerTeamMatchQuery = require("../query/PlayerTeamMatchQuery");

async function findMatchBestPlayer(match_id) {
    const players_kills = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKills(match_id));
    const best_player = findBestPlayer(players_kills);
    return best_player;
}

async function findTeamsBestPlayers(match_id) {
    const players_kills_CT = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKillsTeam(match_id, 1));
    const players_kills_TR = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKillsTeam(match_id, 2));

    let best_player_CT = findBestPlayer(players_kills_CT);
    let best_player_TR = findBestPlayer(players_kills_TR);

    return {counter_terrorists: best_player_CT , terrorists: best_player_TR};
}

async function findTeamsPlayers(match_id) {
    const players_CT = (await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.teamPlayers(match_id, 1))).map(p => p.player_data);
    const players_TR = (await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.teamPlayers(match_id, 2))).map(p => p.player_data);
    return {counter_terrorists: players_CT , terrorists: players_TR};
}

async function findTeam(match_id, team_id) {
    const players = (await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.teamPlayers(match_id, team_id))).map(p => p.player_data);
    return players;
}

async function findRank(match_id) {
    const players = await PlayerTeamMatch.findAll(PlayerTeamMatchQuery.playerKills(match_id));
    let players_points = players.map(p => getPointsInfo(p));
    organizeRank(players_points);
    return players_points;
}

const organizeRank = (players_points) => {
    players_points.forEach(p =>  delete p.player.dataValues.kills);
    players_points = players_points.sort((prev, actual) => (actual.points > prev.points) ? 1 : -1);
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
    findTeamsBestPlayers,
    findTeam,
    findTeamsPlayers,
    findRank
}