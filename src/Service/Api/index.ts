import { Pokemon } from '../../Interfaces';
import { Cell } from '../../Interfaces/Cell';

export * from './Firebase';

interface InvokeApiWithData<T> {
    data: T
}

async function invokeApi<T>(url: string, data?: any): Promise<T> {
    const response = await fetch(url, {
        body: data
    });
    const json = await response.json();
    return json;
}

export const fetchBoardCells = async (): Promise<Cell[]> => (await invokeApi<InvokeApiWithData<Cell[]>>('https://reactmarathon-api.netlify.app/api/board')).data;

export const getEnemyPokemons = async (): Promise<Pokemon[]> => (await invokeApi<InvokeApiWithData<Pokemon[]>>('https://reactmarathon-api.netlify.app/api/create-player')).data;