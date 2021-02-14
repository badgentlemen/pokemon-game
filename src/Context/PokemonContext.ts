import { createContext } from "react";
import { Pokemon, WinResult } from "../Interfaces";

export interface PokemonContextProps {
    pokemons: Pokemon[],
    enemyPokemons: Pokemon[],
    winResult: WinResult | null;
    appendPokemons?: (pokemon: Pokemon[]) => void;
    setEnemyPokemons?: (pokemons: Pokemon[]) => void;
    setWinResult?: (result: WinResult | null) => void;
    onReset?: () => void;
}

export const PokemonContext = createContext<Partial<PokemonContextProps>>({
    pokemons: [],
    enemyPokemons: [],
    winResult: null
});