import { Pokemon, WinResult } from "../Interfaces";
import { Cell } from "../Interfaces/Cell";

export function randomElement<T>(list: T[]): T | undefined {
    return list[Math.floor(Math.random() * list.length)];
};

export function randomEnumValue<T>(enumObj: T): T[keyof T] {
    const enumValues = Object.values(enumObj);
    return randomElement(enumValues);
}

export function toggleIncludesCollection<T>(list: T[], element: T): T[] {
    return list.includes(element) ? list.filter(item => item !== element) : [...list, element];
}

export const pokemonsAreValidForPlaying = (pokemons?: Pokemon[]) => pokemons && pokemons.length === 5;

const filterByPossession = (board: Cell[], possession: 'red' | 'blue'): Cell[] => board.filter(cell => cell.card?.possession === possession);

export const whoWon = (board: Cell[]): WinResult | null => {

    if (board.length === 0 || board.map(cell => cell.card).includes(null)) {
        return null;
    }

    const playerOneCount = filterByPossession(board, 'blue').length;
    const playerTwoCount = filterByPossession(board, 'red').length;

    if (playerOneCount > playerTwoCount) {
        return 'WE'
    } else if (playerTwoCount > playerOneCount) {
        return 'ENEMY'
    } else {
        return 'NOONE';
    }
}