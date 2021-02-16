import { Pokemon } from '../../Interfaces';
import { Cell } from '../../Interfaces/Cell';

export * from './Firebase';

interface InvokeApiWithData<T> {
    data: T
}

interface GameTurnEffectRequest {
    position: number,
    card: Pokemon,
    board: Cell[]
}

async function invokeApi<T>(url: string, options?: {data?: any, method?: any, headers: Headers | string[][] | Record<string, string>}): Promise<T> {
    const response = await fetch(url, {
        body: options?.data && JSON.stringify(options.data),
        method: options?.method || 'GET',
        headers: options?.headers || {}
    });
    const json = await response.json();
    return json;
}

export const fetchBoardCellsApi = async (): Promise<Cell[]> => (await invokeApi<InvokeApiWithData<Cell[]>>('https://reactmarathon-api.netlify.app/api/board')).data;

export const createEnemyPokemonsApi = async (): Promise<Pokemon[]> => invokeApi<InvokeApiWithData<Pokemon[]>>('https://reactmarathon-api.netlify.app/api/create-player').then(response => response.data).then(pokemons => {
    return pokemons.map(pokemon => {
        return {
            ...pokemon,
            possession: 'red',
            player: 2
        };
    })
});

export const gameTurnEffectApi = async(position: number, card: Pokemon, board: Cell[]): Promise<Cell[]> => {

    const request: GameTurnEffectRequest = {
        position,
        card,
        board
    }

    return invokeApi<InvokeApiWithData<Cell[]>>('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: request
    }).then(response => response.data);
}