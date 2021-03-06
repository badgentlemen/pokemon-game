export interface PokemonValues {
    top: string | number;
    right: string | number;
    bottom: string | number;
    left: string | number;
}

export interface Pokemon {
    id: string;
    height: number
    type: string;
    base_experience: number;
    img: string;
    name: string;
    values: PokemonValues;
    active?: boolean;
    firebaseKey?: string;
    possession: 'red' | 'blue';
    player: number;
}