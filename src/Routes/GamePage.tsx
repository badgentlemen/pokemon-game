import {useEffect, useState} from 'react';
import PokemonCard from '../Components/PokemonCard';
import {Pokemon} from '../Interfaces';
import { GetAllPokemonsApi } from '../Service/Firebase/Api';

export const GamePage = (): JSX.Element => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        GetAllPokemons();
    }, []);

    const GetAllPokemons = async() => {
        try {
            const storedPokemons = await GetAllPokemonsApi();
            setPokemons(storedPokemons);

        } catch (e) {
            setError(e);
        }
    }

    const toggleActiveStateForId = (id: number): void => setPokemons(pokemons => pokemons.map(pokemon => pokemon.id === id ? {
        ...pokemon,
        active: !pokemon.active
   } : pokemon));

    return (
        <div className="game-page">
            <div className="flex">
                {pokemons.map(({id, name, values, img, type, active, firebaseKey}) => <PokemonCard key={firebaseKey} id={id} name={name} values={values} img={img} type={type} isActive={active} onClick={() => toggleActiveStateForId(id)} />)}
            </div>
        </div>
    )
}
