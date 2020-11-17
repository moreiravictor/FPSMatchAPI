const findBestPlayer = (players_kills) => {
    const players_points = players_kills.map(player => getPointInfo(player));
    const best_player = players_points.reduce((prev, current) => (prev.points > current.points) ? prev : current);
    return best_player;
}

function getPointInfo(player) {
    let player_info = {player: player.player_data, points: 0};
    player_info.points = sumPoints(player.player_data.kills);
    return player_info;
}

function sumPoints(kills) {
    return kills.reduce((accum, kill) => accum + kill.kill_type.point_amount, 0);
}
module.exports = {
    findBestPlayer
}