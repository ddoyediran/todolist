import React from 'react';
import Todocard from './Todocard';
import Progresscard from './Progresscard';
import Taskdone from './Taskdone';


const Card = () => {
	return(
		<div className='card-deck'>
			<Todocard />
			<Progresscard />
			<Taskdone />
		</div>
	)
}


export default Card;