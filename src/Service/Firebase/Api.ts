import { Database } from ".";
import { Pokemon } from "../../Interfaces";
import { deserializePokemonsResponse } from "./Utils";

export const GetAllPokemonsApi = (): Promise<Pokemon[]> => Database.ref('pokemons').once('value').then(response => deserializePokemonsResponse(response));