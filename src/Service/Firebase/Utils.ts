import firebase from 'firebase';
import { Pokemon } from '../../Interfaces';

export const deserializePokemonsResponse = (snapshot: firebase.database.DataSnapshot): Pokemon[] => Object.entries<Pokemon>(snapshot.val()).map(([key, pokemon]) => {
    return {
        ...pokemon,
        firebaseKey: key
    };
});
