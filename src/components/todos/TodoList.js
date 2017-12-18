import React, {PureComponent} from 'react'

export default class TodoList extends PureComponent{
	constructor(props){
		super(props);
	}

	renderList(item, index){
		return(
			<li key={index}>
				{item.value}
				<button>check</button>
				<button>remove</button>
			</li>
		)
	}

	render() {
		const {dataSource} = this.props;//var dataSource = this.props.dataSource;
		// console.log("TodoList:"+dataSource);
		return (
			<ul>
				{dataSource.map(this.renderList)}
			</ul>
		)
	}
}