import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PokemonContext } from "../../Context/PokemonContext";
import { Pokemon } from "../../Interfaces";
import { StartPage, BoardPage, FinishPage } from './Routes';

const GamePage = (): JSX.Element => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
}

export default GamePage;