const express = require('express');
const WeaponController = require('./controllers/WeaponController');
const routes = express.Router();

routes.post('/weapons', WeaponController.create);
routes.get('/weapons', WeaponController.get);


module.exports = routes;