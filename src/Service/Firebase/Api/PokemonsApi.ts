import { PokemonsRef, PokemonUniqueRef } from "./Common";
import { Pokemon } from "../../../Interfaces";
import { deserializePokemonsResponse } from "../Utils";

interface FetchAllSockerCallbacks {
    onUpdate?: (pokemons: Pokemon[]) => void,
    onLoading?: (state: boolean) => void,
    onError?: (error: any) => void
}

export const fetchAll = (): Promise<Pokemon[]> => PokemonsRef().once('value').then(response => deserializePokemonsResponse(response));

export const subscribeFetchAll = ({onError, onLoading, onUpdate}: FetchAllSockerCallbacks) => {
    onLoading && onLoading(true);

    PokemonsRef().on('value', (response) => {
        const pokemons = deserializePokemonsResponse(response);
        onUpdate && onUpdate(pokemons);
        onLoading && onLoading(false);
    }, (error) => {
        onError && onError(error);
        onLoading && onLoading(false);
    });
};

export const unsubscribeFetchAll = (): void => PokemonsRef().off();

export const setActiveStateWithId = (firebaseKey: string, active: boolean): Promise<void> => PokemonUniqueRef(firebaseKey).update({
    active
});

export const createNewFromSample = async (pokemon: Pokemon): Promise<Pokemon> => {

    const newKey = PokemonsRef().push().key;

    if (newKey) {

        const newPokemon: Pokemon = {
            ...pokemon,
            active: false,
            id: newKey,
            firebaseKey: newKey
        }

        await PokemonUniqueRef(newKey).set(newPokemon);
        return newPokemon;
    }

    return Promise.reject();
}