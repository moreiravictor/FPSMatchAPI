const winnerTeamPlayers = {
    attributes: ['match_id'], 
    include: [
        {
            association: 'team'
        }, 
        {
            association: 'players',
            attributes: ['player_team_match_id'],  
            include: 'player_data'
        }
    ]
};
module.exports = {winnerTeamPlayers};