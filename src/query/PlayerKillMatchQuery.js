const headshots = (match_id) =>   {
    return {
        attributes: ['match_id'],
        where: {
            kill_id: 1, 
            match_id: match_id
        }, 
        include: {
            as: 'player',
            association: 'killer',
        }
    }
};
module.exports = {headshots}