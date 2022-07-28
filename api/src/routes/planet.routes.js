const { Router } = require('express');
const router = Router();
const {
	getPlanet,
	getAllPlanets
} = require('../controllers/planet.controllers');

///////////////////////////////////////////////////////////////

//Rutas

router.get('/planets/:id', getPlanet)
router.get('/planets', getAllPlanets)


///////////////////////////////////////////////////////////////

module.exports = router;