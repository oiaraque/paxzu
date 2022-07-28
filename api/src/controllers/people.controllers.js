const axios = require('axios');
const swapi = require('swapi-node'); 

/////////////////////////////////////////////////////////////

const getAllPeople = async(req,res,next)=>{
	try{
		let height = req.query.height;
		const people = await axios.get('https://swapi.dev/api/people/');
		let people50 = people.data.results.slice(0,50);
		res.json(people50)
		if(people50[height]){
			res.json(people50[height]).sort();
		}
	} catch(error){
		next(error)
	}
}

const getPeople = async(req,res,next)=>{
	try{
		let id = req.params.id
		 let people = swapi.people({id}).then((result) => {
		    console.log(result);
		    res.json(result)
		});		
			  
	} catch(error){
		next(error)
	}
}



/////////////////////////////////////////////////////////////

module.exports = {
	getAllPeople,
	getPeople
}