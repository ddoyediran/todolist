import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';


library.add(faTrash);

class AddNoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: ''
			}
		}

		// this.addItem = this.addItem.bind(this);
		// this.handleInput = this.handleInput.bind(this);
		// this.deleteItem = this.deleteItem.bind(this);
	}

	addItem = (e) => {
		e.preventDefault();
		const newItem = this.state.currentItem;
		console.log(newItem);
		if(newItem.text !== '') {
			const newItems = [...this.state.items, newItem];
			console.log(newItems)
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: ''
				}
			})
		}
	}

	handleInput = (e) => {
    	this.setState({
     	 	currentItem:{
        		text: e.target.value,
        		key: Date.now()
			}
		});
	}

	deleteItem = (key) => {
		const filteredItems = this.state.items.filter(item => 
			item.key !== key);
		this.setState({
			items: filteredItems
		});
	}

	setUpdate = (text, key) => {
		const items = this.state.items;
		items.map(item => {
			if(item.key === key) {
				item.text = text;
			}
		})
		this.setState({ 
			items: items 
		})
	}

	render() {
		return(
			<div>
				<form id='to-do-form' onSubmit={this.addItem}>
					<input 
					type='text' 
					placeholder='Enter task here' 
					value={this.state.currentItem.text} 
					onChange={this.handleInput}
					></input>
					<button type='submit'>Add</button>
				</form>
				<ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} /><ListItems/>
			</div>
		)
	}
}


export default AddNoteForm;
