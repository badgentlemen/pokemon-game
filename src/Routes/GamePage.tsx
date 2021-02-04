import { useState } from 'react';
import { pokemons as initialPokemons } from '../App';
import PokemonCard from '../Components/PokemonCard';
import { Pokemon } from '../Interfaces';

export const GamePage = (): JSX.Element => {

    const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);

    const toggleActiveStateForId = (id: number): void => setPokemons(pokemons => pokemons.map(pokemon => pokemon.id === id ? {
        ...pokemon,
        active: !pokemon.active
    } : pokemon));

    return (
        <div className="game-page">
            <div className="flex">
                {pokemons.map(({ id, name, values, img, type, active }) => <PokemonCard key={id} id={id} name={name} values={values} img={img} type={type} isActive={active} onClick={() => toggleActiveStateForId(id)} />)}
            </div>
        </div>
    )
}
