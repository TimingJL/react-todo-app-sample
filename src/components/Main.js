import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './todos/Todo'
import Tree from './tree/Tree'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Todo} />
			<Route path = '/tree' component={Tree} />
		</Switch>
	</main>
)

export default Main