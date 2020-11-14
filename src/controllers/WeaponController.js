const Weapon = require('../models/Weapon')

module.exports = {

    async create(req, res) {
        const {id, weapon_name, damage, recoil, magazine, bullets_magazine} = req.body;
        const weapon  = await Weapon.create({id, weapon_name, damage, recoil, magazine, bullets_magazine});
        return res.json(weapon);
    },
    async get(req, res) {
        const weapons = await Weapon.findAll();
        return res.json(weapons);
    }

};