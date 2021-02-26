import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from './PizzaForm';

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<div className='pizza-btn'>
				<button className='btn-secondary'>PIZZA?</button>
			</div>
		</section>
	);
};

export default HeroSection;
