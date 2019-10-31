import React from 'react';
import AddNoteForm from './AddNoteForm';
import './Todocard.css'


const Todocard = () => {
	return(
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>Task Lists</h5>
				<p className='card-text'>To do list goes here. But the intresting fact is :) I don't know how to do it yet ):</p>
				<AddNoteForm />
			</div>
			<div className='card-footer'>
				<small className="text-muted">Last updated 3 mins ago</small>
			</div>
		</div>
	)
}


export default Todocard;