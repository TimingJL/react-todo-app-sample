import React from 'react';
import { Link } from 'react-router-dom'
import Todo from './Todo'

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Todo</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header