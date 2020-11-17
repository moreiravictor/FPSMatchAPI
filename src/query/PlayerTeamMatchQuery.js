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
module.exports = {
    playerKills
}