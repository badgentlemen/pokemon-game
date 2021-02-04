import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutPage, ContactPage, GamePage, HomePage } from './Routes';
import MenuHeader from './Components/MenuHeader';
import { Pokemon } from './Interfaces';
import './App.css';

export const pokemons: Pokemon[] = require('./Fixtures/pokemons');

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route>
					<Fragment>
						<MenuHeader />
						<Switch>
							<Route path="/" component={HomePage} exact />
							<Route path="/game" component={GamePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/contact" component={ContactPage} />
						</Switch>
					</Fragment>
				</Route>
			</Switch>
		</div>
	)
};

export default App;
