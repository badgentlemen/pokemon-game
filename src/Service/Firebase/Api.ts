import { Database } from ".";
import { Pokemon } from "../../Interfaces";

export const GetAllPokemonsApi = (): Promise<Pokemon[]> => Database.ref('pokemons').once('value').then(snapshot => Object.entries<Pokemon>(snapshot.val()).map(([key, pokemon]) => {
    return {
        ...pokemon,
        firebaseKey: key
    };
}));