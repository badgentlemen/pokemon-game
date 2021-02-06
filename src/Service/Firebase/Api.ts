import { Database } from ".";
import { Pokemon } from "../../Interfaces";
import { deserializePokemonsResponse } from "./Utils";

const PokemonsRefRootPath = 'pokemons';

const PokemonsRef = () => Database.ref(PokemonsRefRootPath);
const PokemonUniqueRef = (key: string) => Database.ref(`${PokemonsRefRootPath}/${key}`);

export const GetAllPokemonsApi = (): Promise<Pokemon[]> => PokemonsRef().once('value').then(response => deserializePokemonsResponse(response));

export const SetActiveStateForPokemonWithIdApi = (firebaseKey: string, active: boolean): Promise<void> => PokemonUniqueRef(firebaseKey).update({
    active
});