const playerKills = (match_id) => { 
    return {
        attributes:['player_id'],
        where: {match_id: match_id},
        include: [
            {
                association: 'player_data', 
                include: [
                    {
                        attributes: ['killer_id'],
                        association: 'kills',
                        include: {association: 'kill_type'}
                    }
                ]
            },
        ]
    }
};
const playerKillsTeam = (match_id, team_id) => {
    return {
        attributes:['player_id', 'team_id'],
        where: {match_id: match_id, team_id: team_id},
        include: [
            {
                association: 'player_data', 
                include: [
                    {
                        attributes: ['killer_id'],
                        association: 'kills',
                        include: {association: 'kill_type'}
                    }
                ]
            },
            {
                association: 'team', 

            }
        ]
    }
};

const teamPlayers = (match_id, team_id) => {
    return {
        where: {match_id: match_id, team_id: team_id},
        include: {association: 'player_data'}
    }
}
module.exports = {
    playerKills,
    playerKillsTeam,
    teamPlayers
}