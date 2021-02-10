import { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../Components/PokemonCard';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { Pokemon } from '../../../../Interfaces';
import { subscribeFetchAll, unsubscribeFetchAll } from '../../../../Service/Firebase/Api/PokemonsApi';
import pokemonStyle from '../../../../Components/PokemonCard/style.module.css';

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

    const allowGaming = storedPokemons && storedPokemons.length > 0;

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
                                {allowGaming && (
                                    <button onClick={() => historyPush('/game/board')} style={{
                                        marginBottom: 50
                                    }}>
                                        START GAME
                                    </button>
                                )}
                                <div className="flex">
                                    {pokemons.map(({ id, name, values, img, type, isSelected, firebaseKey, active }) => <PokemonCard key={firebaseKey} id={id} name={name} values={values} img={img} type={type} isSelected={isSelected} isActive={active} onClick={() => handlePokemonCardClick(id)} className={pokemonStyle.root} />)}
                                </div>
                            </Fragment>
                        )

                }
            </div>
        </div>
    )
}