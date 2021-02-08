import { Fragment, useEffect, useState } from 'react';
import PokemonCard from '../../../../Components/PokemonCard';
import { Pokemon } from '../../../../Interfaces';
import { fetchAll, createNewFromSample, setActiveStateWithId, } from '../../../../Service/Firebase/Api/PokemonsApi';
import { randomElement } from '../../../../Service/Utils';

export const StartPage = (): JSX.Element => {

    const [isFetching, setFetching] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getAllPokemons();
    }, []);

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

    const handleAppendNewPokemon = async () => {
        try {
            const randonPokemon = randomElement(pokemons);

            if (randonPokemon) {
                const newPokemon = await createNewFromSample(randonPokemon);
                setPokemons([...pokemons, newPokemon]);
            }

        } catch (e) {

        }
    }

    const handleStartGame = (): void => {

    }

    const toggleActiveStateForId = (id: number | string): void => setPokemons(pokemons => pokemons.map(pokemon => pokemon.id === id ? {
        ...pokemon,
        active: !pokemon.active
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
                                <button onClick={handleStartGame}>
                                    START GAME
                                </button>
                                <div className="flex">
                                    {pokemons.map(({ id, name, values, img, type, active, firebaseKey }, index) => <PokemonCard key={firebaseKey} id={index + 1} name={name} values={values} img={img} type={type} isActive={active} onClick={() => {

                                        if (firebaseKey) {
                                            setActiveStateWithId(firebaseKey, !active)
                                        }

                                        toggleActiveStateForId(id);

                                    }} />)}
                                </div>
                            </Fragment>
                        )

                }
            </div>
        </div>
    )
}