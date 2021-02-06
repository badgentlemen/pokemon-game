import { PokemonsRef, PokemonUniqueRef } from "./Common";
import { Pokemon } from "../../../Interfaces";
import { deserializePokemonsResponse } from "../Utils";

export const fetchAll = (): Promise<Pokemon[]> => PokemonsRef().once('value').then(response => deserializePokemonsResponse(response));

export const setActiveStateWithId = (firebaseKey: string, active: boolean): Promise<void> => PokemonUniqueRef(firebaseKey).update({
    active
});

export const createNewFromSample = async (pokemon: Pokemon): Promise<Pokemon> => {

    const newKey = PokemonsRef().push().key;

    if (newKey) {

        const newPokemon: Pokemon = {
            ...pokemon,
            id: newKey
        }

        await PokemonUniqueRef(newKey).set({
            ...newPokemon
        });

        return newPokemon;
    }


    return Promise.reject();
}