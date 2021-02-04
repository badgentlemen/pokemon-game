import { Route, Switch } from 'react-router-dom';
import { AboutPage, ContactPage, GamePage, HomePage } from './Routes';
import './App.css';
import { Fragment } from 'react';
import MenuHeader from './Components/MenuHeader';

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
