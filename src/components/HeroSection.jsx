import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from './PizzaForm';

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<Link className='pizza-btn' to='/pizza'>
				<button className='btn-secondary'>PIZZA?</button>
			</Link>

			<Switch>
				<Route path='/pizza' component={PizzaForm} />
			</Switch>
		</section>
	);
};

export default HeroSection;
