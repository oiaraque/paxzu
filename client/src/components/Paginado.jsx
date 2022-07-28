
const Paginado =({peoplePerPage,people,paginado})=>{
	const pageNumbers=[];
	
	for(let i=1; i<=Math.ceil(people/peoplePerPage); i++){
		pageNumbers.push(i)
	}
	return(
		<nav>
		  <ul className='paginado'>
		  	{
		  	  pageNumbers && pageNumbers.map(number=>(
		  	  <li className='number' key={number}>
		  	  	<button onClick={()=>paginado(number)}>{number}</button>
		  	  </li>
		  	  ))	
		  	}
		  </ul>	
		</nav>
	)
}

export default Paginado; 