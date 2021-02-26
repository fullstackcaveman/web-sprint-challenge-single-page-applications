import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import PizzaForm from './components/PizzaForm';
import Resturaunts from './components/Resturaunts';

import './styles/styles.css';

const App = () => {
	return (
		<>
			<NavBar />

			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
			</Switch>
		</>
	);
};
export default App;
