import React, { PureComponent } from 'react'



export default class Action extends PureComponent{
	constructor(props){
		super(props);
		this.handleAddbtnClick = this.handleAddbtnClick.bind(this);
	};

	handleAddbtnClick(){
		const { handleOnAddItem } = this.props;//var handleOnAddItem = this.props.handleOnItem
		const value = this.inputText.value;
		if(value){
			handleOnAddItem(value)
			this.inputText.value = '';
		}
	}

	render() {
		return(
			<div>
				<input 
					ref = {input => this.inputText = input}
				/>

				<button onClick={this.handleAddbtnClick}>
					Add
				</button>
			</div>
		)
	}
}