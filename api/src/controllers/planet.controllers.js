const axios = require('axios');
const swapi = require('swapi-node'); 

////////////////////////////////////////////////////////////////

const getPlanet = async(req,res,next)=>{
	try{
		let id = req.params.id
		let planet = swapi.planets({id}).then((result) => {
		    console.log(result);
		res.json(result);
	});		
	} catch(error){
		next(error)
	}
}

const getAllPlanets = async(req,res,next)=>{
	try{
		const planet = await axios.get('https://swapi.dev/api/planets/');
		let planetInfo = await planet.data.results.map(e=>{
			return{
				planeta: e.name,
				personajes: e.residents
			}
		})
		res.json(planetInfo)
	} catch(error){
		next(error)
	}
}

module.exports = {
	getPlanet,
	getAllPlanets
};