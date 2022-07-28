const { Router } = require('express');
const router = Router();
const {
	getAllPeople,
	getPeople
} = require('../controllers/people.controllers');

///////////////////////////////////////////////////////////////

//Rutas

router.get('/people', getAllPeople)
router.get('/people/:id', getPeople)


///////////////////////////////////////////////////////////////

module.exports = router;