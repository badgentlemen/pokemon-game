import { Fragment } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AboutPage, ContactPage, GamePage, HomePage } from './Routes';
import MenuHeader from './Components/MenuHeader';
import { Pokemon } from './Interfaces';
import classnames from 'classnames';
import styles from './style.module.css';
import './App.css';

export const pokemons: Pokemon[] = require('./Fixtures/pokemons');

const App = () => {
	const isHomePage: boolean = useRouteMatch('/')?.isExact || false;

	return (
		<div className="App">
			<Switch>
				<Route>
					<Fragment>
						<MenuHeader bgActive={!isHomePage} />
						<div className={classnames(styles.wrap, {
							[styles.isHomePage]: isHomePage
						})}>
							<Switch>
								<Route path="/" component={HomePage} exact />
								<Route path="/game" component={GamePage} />
								<Route path="/about" component={AboutPage} />
								<Route path="/contact" component={ContactPage} />
							</Switch>
						</div>
					</Fragment>
				</Route>
			</Switch>
		</div>
	)
};

export default App;
