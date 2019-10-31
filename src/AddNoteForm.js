import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';

// const AddNoteForm = () => {

// 	//decalring states
// 	const [titleFieldVisible, setTitleFieldVisible] = useState(false);
// 	const [title, setTitle] = useState('');
// 	const [content, setContent] = useState('');

// 	const showTitleField = () => {
// 		setTitleFieldVisible(true);
// 	}

// 	const hideTitleField = () => {
// 		setTitleFieldVisible(false);
// 	}

// 	//To create Note
// 	export const createNote = (title, content) => {
// 		const id = $('div').append()
// 	}

// 	//To Submit Form
// 	const handleSubmit = e => {
// 		e.preventDefault()

// 		if(title || content) {
// 			const database = createNote(title.trim(), content.trim())
// 			.then(
// 				() => {
// 					//reset all states
// 					setTitle('')
// 					setContent('')
// 					setTitleFieldVisible('false') 
// 				},
// 				e => console.log(e), //log any error
// 			)

// 			return database;

// 			//add offline
// 			//addNote(title, content)
// 			//reset all states
// 			setTitle('')
// 			setContent('')
// 			setTitleFieldVisible('false')
// 		}
// 	} //end of handleSubmit

// 	return(
// 		<div>
// 			<div className='create-form'>
// 				{titleFieldVisible && (
// 					<div className='backdrop' onClick={hideTitleField} />
// 				)}

// 					<form onSubmit={handleSubmit} className='create-note'>
// 						{titleFieldVisible && (
// 							<input 
// 							type='text' 
// 							value={title} 
// 							onChange={e => setTitle(e.target.value)}
// 							onFocus={showTitleField}
// 							name='title'
// 							placeholder='Title'
// 							/>
// 						)}

// 						<textarea
// 						value={content}
// 						onChange={e => setContent(e.target.value)}
// 						onFocus={showTitleField}
// 						name='content'
// 						placeholder='Take a note...'
// 						/>
// 						<button type='Submit'>
// 							<span>&#43;</span>
// 						</button>
// 					</form>
// 			</div>
// 		</div>
// 	)
// }


// class AddNoteForm extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			value: 'Some text here',
// 			isInEditMode: false
// 		}
// 	}

// 	changeEditMode = () => {
// 		this.setState({ isInEditMode: !this.state.isInEditMode })
// 	}

// 	updateComponentValue = () => {
// 		this.setState({ 
// 			isInEditMode: false,
// 			value: this.refs.theTextInput.value
// 		})
// 	}

// 	renderEditView = () => {
// 		return <div>
// 			<input type='text' defaultValue={this.state.value} ref='theTextInput' />
// 		<button onClick={this.changeEditMode}>X</button>
// 		<button onClick={this.updateComponentValue}>Ok</button>
// 		</div>
// 	}

// 	renderDefaultView = () => {
// 		return <div onClick={this.changeEditMode}>
// 				{this.state.value}
// 			</div>
// 	}

// 	render() {
// 		return(
// 			this.state.isInEditMode ? this.renderEditView() 
// 			: this.renderDefaultView()
// 		)
// 	}
// }

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