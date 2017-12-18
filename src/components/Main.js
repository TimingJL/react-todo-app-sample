import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './todos/Todo'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Todo} />
		</Switch>
	</main>
)

export default Main