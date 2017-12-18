import React, { PureComponent } from 'react'
import Action from './todos/Action'
import TodoList from './todos/TodoList'


export default class Todo extends PureComponent{
	constructor(props){
		super(props);
		this.state = {
			list: [],
		}
		this.handleOnAddItem = this.handleOnAddItem.bind(this);
	};

	id = 0;

	handleOnAddItem(value){// get value from <input /> form in Action Component
		const item ={
			id: this.id,
			value,
		}
		
		this.setState({
			list: [...this.state.list, item],// push item to this list?
		});

		// console.log(this.state.list)
	}

	render() {
		const {list} = this.state;
		return(
			<div>
				<h1>This is Todo Page.</h1>
				<Action handleOnAddItem={this.handleOnAddItem} />
				<TodoList dataSource={list} />
			</div>
			
		)
	}
}

