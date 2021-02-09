import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PokemonContext } from "../../Context/PokemonContext";
import { Pokemon } from "../../Interfaces";
import { StartPage, BoardPage, FinishPage } from './Routes';

const GamePage = (): JSX.Element => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
    const rootPath = `${match.path}/`;

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            appendPokemons: (pokemons) => setSelectedPokemons(pokemons)
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