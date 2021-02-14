import { useState } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { PokemonContext } from "../../Context/PokemonContext";
import { Pokemon, WinResult } from "../../Interfaces";
import { StartPage, BoardPage, FinishPage } from './Routes';

const GamePage = (): JSX.Element => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
    const [enemyPokemons, setEnemyPokemons] = useState<Pokemon[]>([]);
    const [winResult, setWinResult] = useState<WinResult | null>(null);
    const { replace } = useHistory();

    const rootPath = `${match.path}/`;

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            enemyPokemons,
            winResult,
            appendPokemons: (pokemons) => setSelectedPokemons(pokemons),
            setEnemyPokemons: (pokemons) => setEnemyPokemons(pokemons),
            onReset: () => {
                setSelectedPokemons(() => []);
                setEnemyPokemons(() => []);
                setWinResult(() => null);
            },
            setWinResult: (result) => {
                setWinResult(() => result);

                if (result) {
                    replace('/game/finish');
                }
            }
        }}>
            <Switch>
                <Route path={rootPath} exact component={StartPage} />
                <Route path={`${rootPath}board`} component={BoardPage} />
                <Route path={`${rootPath}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
}

export default GamePage;