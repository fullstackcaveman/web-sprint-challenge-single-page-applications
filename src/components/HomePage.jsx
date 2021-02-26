import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import HeroSection from './HeroSection';
import PizzaForm from './PizzaForm';
import Resturaunts from './Resturaunts';

const HomePage = () => {
	return (
		<Route>
			<HeroSection />
			<Resturaunts />
			<Switch>
				<Route path='/pizza' component={PizzaForm} />
				<Route exact path='/' />
			</Switch>
		</Route>
	);
};

export default HomePage;
