import { Cell } from '../../Interfaces/Cell';

export * from './Firebase';

export const fetchBoardCells = (): Promise<Cell[]> => fetch('https://reactmarathon-api.netlify.app/api/board').then(response => response.json()).then(json => json.data || []);