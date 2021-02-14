import { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../Components/PokemonCard';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { Pokemon } from '../../../../Interfaces';
import { subscribeFetchAll, unsubscribeFetchAll } from '../../../../Service/Api/Firebase';
import pokemonStyle from '../../../../Components/PokemonCard/style.module.css';
import { pokemonsAreValidForPlaying } from '../../../../Service/Utils';

export const StartPage = (): JSX.Element => {

    const [isFetching, setFetching] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const { appendPokemons, pokemons: storedPokemons } = useContext(PokemonContext);
    const { push: historyPush } = useHistory();

    useEffect(() => {
        subscribeFetchAll({
            onUpdate: pokemons => setPokemons(pokemons),
            onLoading: loading => setFetching(loading),
            onError: error => setError(error)
        });

        return () => {
            unsubscribeFetchAll();
        }
    }, []);

    useEffect(() => {

        const selectedPokemons = pokemons.filter(pokemon => pokemon.isSelected);
        appendPokemons && appendPokemons(selectedPokemons);

    }, [pokemons]); // eslint-disable-line react-hooks/exhaustive-deps

    const handlePokemonCardClick = (id: number | string): void => setPokemons(pokemons => pokemons.map(pokemon => pokemon.id === id ? {
        ...pokemon,
        isSelected: !pokemon.isSelected,
    } : pokemon));

    return (
        <div className="game-page">
            <div className="flex flex-column">
                {isFetching
                    ? (
                        <strong>
                            Loading...
                        </strong>
                    )
                    : error
                        ? <div>Ошибка запроса</div>
                        : (
                            <Fragment>
                                <button onClick={() => historyPush('/game/board')} style={{
                                    marginBottom: 50
                                }} disabled={!pokemonsAreValidForPlaying(storedPokemons)}>
                                    START GAME
                                </button>
                                <div className="flex">
                                    {pokemons.map(pokemon => (
                                        <PokemonCard key={pokemon.firebaseKey || pokemon.id} onClick={() => handlePokemonCardClick(pokemon.id)} className={pokemonStyle.root} pokemon={pokemon} />
                                    ))}
                                </div>
                            </Fragment>
                        )

                }
            </div>
        </div>
    )
}