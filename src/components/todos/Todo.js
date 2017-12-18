import React, { PureComponent } from 'react'
import Action from './Action'
import TodoList from './TodoList'
import { STATE_COMPLETE, STATE_INCOMPLETE } from './constants'

const toggleState = (state) => {
	if (state === STATE_COMPLETE) {
		return STATE_INCOMPLETE;
	}
	return STATE_COMPLETE;
}

export default class Todo extends PureComponent{
	constructor(props){
		super(props);
		this.state = {
			list: [],
		}
		this.handleOnAddItem = this.handleOnAddItem.bind(this);
		this.handleOnCheckItem = this.handleOnCheckItem.bind(this);
		this.handleOnRemoveItem = this.handleOnRemoveItem.bind(this);
	};

	id = 1;

	handleOnAddItem(value){// get value from <input /> form in Action Component
		const item ={
			id: this.id,
			value,
			state: STATE_INCOMPLETE,
		}

		this.setState({
			list: [...this.state.list, item],// push item into list?
		});
		this.id += 1;
	}

	handleOnCheckItem(id){
		// alert('Check');
		this.setState({
			list: this.state.list.map((item) => {
				if(item.id === id) {
					return{
						...item,
						state: toggleState(item.state),
					}
				}
				return item;
			}),
		});
	}

	handleOnRemoveItem(id){
		this.setState({
			list: this.state.list.filter((item) => item.id !== id),
		});
	}

	render() {
		const {list} = this.state;
		return(
			<div>
				<h1>This is Todo Page.</h1>
				<Action handleOnAddItem={this.handleOnAddItem} />
				<TodoList 
					dataSource={list} 
					handleOnCheckItem = {this.handleOnCheckItem}
					handleOnRemoveItem= {this.handleOnRemoveItem}
				/>
			</div>			
		)
	}
}

