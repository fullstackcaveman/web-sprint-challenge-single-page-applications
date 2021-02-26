import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Pizza from './components/Pizza';

import './styles/styles.css';

const App = () => {
	return (
		<>
			<NavBar />
			<Switch>
				<Route path='/pizza' component={Pizza} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</>
	);
};
export default App;
