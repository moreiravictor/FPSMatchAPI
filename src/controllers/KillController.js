const Kill = require("../models/Kill")

module.exports = {
    async getKillPoints(req, res) {
        const points = await Kill.findAll();
        return res.json(points);
    }
}