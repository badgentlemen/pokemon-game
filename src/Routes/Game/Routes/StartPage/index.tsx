import { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { Pokemon } from '../../../../Interfaces';
import { subscribeFetchAll, unsubscribeFetchAll } from '../../../../Service/Api/Firebase';
import { pokemonsAreValidForPlaying, toggleIncludesCollection } from '../../../../Service/Utils';
import PokemonCardsInline from '../../../../Components/PokemonCardsInline';

export const StartPage = (): JSX.Element => {

    const [isFetching, setFetching] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
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

        const selectedPokemons = pokemons.filter(pokemon => selectedIds.includes(pokemon.id));
        appendPokemons && appendPokemons(selectedPokemons);

    }, [selectedIds]); // eslint-disable-line react-hooks/exhaustive-deps

    const handlePokemonCardClick = (id: string): void => setSelectedIds(prev => toggleIncludesCollection(prev, id));

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
                                    <PokemonCardsInline pokemons={pokemons}
                                        onCardClick={pokemon => handlePokemonCardClick(pokemon.id)} selectedIds={selectedIds}/>
                                </div>
                            </Fragment>
                        )

                }
            </div>
        </div>
    )
}