import React from 'react';
import { Link } from 'react-router-dom';

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
					<button className='btn-primary'>Call</button>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
