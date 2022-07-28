import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';

const Detalle=()=> {

	const [detalle, setDetalle] = useState([])
	let query = new URLSearchParams(window.location.search);
	console.log(query)
	let id = query.get('id');

	useEffect(()=>{
		const endpoint = `http://localhost:4000/people/${id}`
		axios.get(endpoint)
			.then(res=>{
				let apiData = res.data
				setDetalle(apiData)
			})
			.catch(error=>{
				swal(<h2>Intenta nuevamente</h2>)
			})
	}, [setDetalle])
	return (
		<div>
			{ detalle &&
			<>
			<h2 className='m-4'><center>{detalle.name}</center></h2>
			<div className='row'>
				<div className='col-8'>
					<p>Height: {detalle.height}</p>
					<p>Mass: {detalle.mass}</p>
					<p>Hair Color: {detalle.hair_color}</p>
					<p>Skin Color: {detalle.skin_color}</p>
					<p>Eye Color: {detalle.eye_color}</p>
					<p>Birth: {detalle.birth_year}</p>
					<p>Gender: {detalle.gender}</p>
					<p>Homeworld: {detalle.homeworld}</p>
					<p>Films: {detalle.films}</p>
					<p>Vehicles:{detalle.vehicles}</p>
					<p>Starships: {detalle.starships}</p>		 
				</div>
			</div>
			</>
		}			
		</div>
	)
}

export default Detalle