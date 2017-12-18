import React, { PureComponent } from 'react'

const url = 'http://0.0.0.0:3001/api/treeData';

const xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", url, false ); // false for synchronous request
xmlHttp.send( null );
const data = xmlHttp.responseText;

export default class Tree extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			tree: [],
		}
	}

	transToNode(item, index){
		return item["id"];
	}

	componentWillMount() {
		const obj = JSON.parse(data)	//obj.data.tree	
		const nodeArrayOfTree = [];

		obj.data.tree.forEach(function(element) {
			nodeArrayOfTree.push(
				{
					id: element['id'],
					name: element['name'],
					parent: element['parent'],
					description: element['description'],
					child: [],
				}
			)
		});


		

		console.log(nodeArrayOfTree);

	}



	render(){
		return(
			<div>
				<h1>This is Tree Page.</h1>

			</div>
		)
	}
}


