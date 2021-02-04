import { Fragment } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { AboutPage, ContactPage, GamePage, HomePage, NotFoundPage } from './Routes';
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
				<Route path="/404" component={NotFoundPage} />
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
								<Route render={() => <Redirect to="/404"/>} />
							</Switch>
						</div>
					</Fragment>
				</Route>
			</Switch>
		</div>
	)
};

export default App;
