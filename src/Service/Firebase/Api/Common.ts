import { Database } from "..";

const PokemonsRefRootPath = 'pokemons';
export const PokemonsRef = () => Database.ref(PokemonsRefRootPath);
export const PokemonUniqueRef = (key: string) => Database.ref(`${PokemonsRefRootPath}/${key}`)