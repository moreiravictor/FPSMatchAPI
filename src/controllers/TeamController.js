const Team = require("../models/Team")

module.exports = {
    async getTeamDomains(req, res) {
        const teams = await Team.findAll();
        return res.json(teams);
    }
}