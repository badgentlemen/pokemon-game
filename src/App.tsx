import { useState } from 'react';
import { GamePage, HomePage } from './Routes';
import './App.css';

type PageType = 'app' | 'game';

const App = () => {

	const [page, setPage] = useState<PageType>('app');

	const handleChangePage = (): void => setPage('game');

	return (
		<div className="App">
			{ page === 'game'
				? <GamePage />
				: <HomePage onChangePage={handleChangePage}/>
			}
		</div>
	)
};

export default App;
