import { createContext } from "react";
import { Pokemon } from "../Interfaces";

export interface PokemonContextProps {
    pokemons: Pokemon[],
    appendPokemons?: (pokemon: Pokemon[]) => void;
}

export const PokemonContext = createContext<Partial<PokemonContextProps>>({
    pokemons: []
});