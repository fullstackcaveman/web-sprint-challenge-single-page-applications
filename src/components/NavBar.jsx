import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import HomePage from './HomePage';

const NavBar = () => {
	return (
		<nav className='navbar'>
			<div className='title-nav'>
				<h3>QuickEats</h3>
			</div>
			<div className='btn-nav'>
				<Link to='/'>
					<button className='btn-primary'>Home</button>
				</Link>

				<a href='tel:(555)555-5555'>
					<button id='call' className='btn-primary'>
						Call 555-5555
					</button>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
