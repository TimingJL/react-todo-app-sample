import React, {PureComponent} from 'react'
import { STATE_COMPLETE, STATE_INCOMPLETE } from './constants'

const completeStyle = {
	textDecoration: 'line-through'
} 

const ShowCompleteText = (props) => props.state === STATE_COMPLETE ?
	<span style={completeStyle}>{props.value}</span> : null;

const ShowIncompleteText = (props) => props.state === STATE_INCOMPLETE ?
	<span>{props.value}</span> : null;



export default class TodoList extends PureComponent{
	constructor(props){
		super(props);
		this.renderList = this.renderList.bind(this);
		this.onCheckItem = this.onCheckItem.bind(this);
		this.onRemoveItem = this.onRemoveItem.bind(this);
	}

	onCheckItem(evt) {
		const id = parseInt(evt.target.getAttribute('data-id'), 10);
		this.props.handleOnCheckItem(id);
	}

	onRemoveItem(evt) {
		const id = parseInt(evt.target.getAttribute('data-id'), 10);
		this.props.handleOnRemoveItem(id);
	}

	renderList(item, index){
		return(
			<li key={item.id}>
				<ShowCompleteText {...item} />
				<ShowIncompleteText {...item} />
				<button data-id={item.id} onClick={this.onCheckItem}>Check</button>
				<button data-id={item.id} onClick={this.onRemoveItem} >Remove</button>
			</li>
		)
	}

	render() {
		const {dataSource} = this.props;//var dataSource = this.props.dataSource;

		return (
			<ul>
				{dataSource.map(this.renderList)}
			</ul>
		)
	}
}