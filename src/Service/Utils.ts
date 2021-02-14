import { Cell } from "../Interfaces/Cell";

export function randomElement<T>(list: T[]): T | undefined  {
    return list[Math.floor(Math.random() * list.length)];
};

const filterByPossession = (board: Cell[], possession: 'red' | 'blue'): Cell[] => board.filter(cell => cell.card?.possession === possession);

export const whoWon = (board: Cell[]): 'WE' | 'ENEMY' | 'NOONE' | null => {

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