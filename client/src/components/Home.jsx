import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import Paginado from './Paginado.jsx';

function Home() {

	const [people, setPeople] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [peoplePerPage, setPeoplePerPage] = useState(10);

	useEffect(()=>{
		const endpoint = "http://localhost:4000/people"
		axios.get(endpoint)
			.then(res=>{
				let apiData = res.data
				setPeople(apiData)
			})
			.catch(error=>{
				swal(<h2>Intenta nuevamente</h2>)
			})
	}, [setPeople])

	const indexOfLastPerson = currentPage*peoplePerPage;
	const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
	const currentPerson = people.slice(indexOfFirstPerson, indexOfLastPerson);
	const paginado = (pageNumber)=>{
		setCurrentPage(pageNumber)
	}

	return (
		<div className="box">
			<h1><center>PERSONAJES</center></h1>
			<div className="row">
				{
					people.map((ppl, index)=>{
						return(
							<div className='col-3' key={index}>
							<div className="card my-4">
							    <div className="card-body">
							    <h5 className="card-title">{ppl.name}</h5>
							    <p className="card-text">Height: {ppl.height}</p>
							    <p className="card-text">Mass: {ppl.mass}</p>
							    <p className="card-text">Hair Color: {ppl.hair_color}</p>
							    <p className="card-text">Skin Color: {ppl.skin_color}</p>
							    <p className="card-text">Eye Color: {ppl.eye_color}</p>
							    <p className="card-text">Birth: {ppl.birth_year}</p>
							    <p className="card-text">Gender: {ppl.gender}</p>
							    <p className="card-text">Homeworld: {ppl.homeworld}</p>
							    <p className="card-text">Films: {ppl.films}</p>
							    <p className="card-text">Vehicles:{ppl.vehicles}</p>
							    <p className="card-text">Starships: {ppl.starships}</p>
							    <Link to={"/detalle/" + ppl.id}  className="btn btn-primary">View detail</Link>
							  </div>
							</div>
							</div>			
						)
					})
				}				
			</div>
			<Paginado 
			class="paginado"
			peoplePerPage={peoplePerPage}
			people={people.length}
			paginado={paginado}
		/>
		</div>
	)
}

export default Home