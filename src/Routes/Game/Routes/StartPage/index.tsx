import { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../Components/PokemonCard';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { Pokemon } from '../../../../Interfaces';
import { fetchAll } from '../../../../Service/Firebase/Api/PokemonsApi';
import pokemonStyle from '../../../../Components/PokemonCard/style.module.css';

export const StartPage = (): JSX.Element => {

    const [isFetching, setFetching] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const { appendPokemons } = useContext(PokemonContext);
    const { push: historyPush } = useHistory();

    useEffect(() => {
        getAllPokemons();
    }, []);

    useEffect(() => {

        const selectedPokemons = pokemons.filter(pokemon => pokemon.isSelected);

        if (selectedPokemons.length > 0) {
            appendPokemons && appendPokemons(selectedPokemons);
            ;
        }

    }, [pokemons]);

    const getAllPokemons = async () => {
        setFetching(() => true);
        try {
            const storedPokemons = await fetchAll();
            setPokemons(storedPokemons);

        } catch (e) {
            setError(e);
        }

        setFetching(() => false);
    }


    const handleStartGame = (): void => historyPush('/game/board');

    const handlePokemonCardClick = (id: number | string): void => setPokemons(pokemons => pokemons.map(pokemon => pokemon.id === id ? {
        ...pokemon,
        isSelected: !pokemon.isSelected
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
                                <button onClick={handleStartGame} style={{
                                    marginBottom: 50
                                }}>
                                    START GAME
                                </button>
                                <div className="flex">
                                    {pokemons.map(({ id, name, values, img, type, isSelected, firebaseKey }) => <PokemonCard key={firebaseKey} id={id} name={name} values={values} img={img} type={type} isSelected={isSelected} onClick={() => handlePokemonCardClick(id)} className={pokemonStyle.root}/>)}
                                </div>
                            </Fragment>
                        )

                }
            </div>
        </div>
    )
}