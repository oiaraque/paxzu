import React, {useEffect, useState} from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';

const Planetas=()=> {
	const [planets, setPlanets] = useState([])

	useEffect(()=>{
		const endpoint = "http://localhost:4000/planets"
		axios.get(endpoint)
			.then(res=>{
				let apiData = res.data
				setPlanets(apiData)
			})
			.catch(error=>{
				swal(<h2>Intenta nuevamente</h2>)
			})
	}, [setPlanets])
	return (
		<div>
			<h1><center>PLANETAS</center></h1>
			<div className="row">
				{
					planets.map((ppl, index)=>{
						return(
							<div className='col-3' key={index}>
							<div className="card my-4">
							    <div className="card-body">
							    <h5 className="card-title">{ppl.planeta}</h5>
							    <p className="card-text">Personajes:{ppl.personajes}</p>
							</div>
							</div>
							</div>			
						)
					})
				}				
			</div>	
		</div>
	)
}

export default Planetas