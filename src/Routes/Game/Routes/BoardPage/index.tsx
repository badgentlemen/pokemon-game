import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerBoard from '../../../../Components/PlayerBoard';
import PokemonCard from '../../../../Components/PokemonCard';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { Pokemon } from '../../../../Interfaces';
import { Cell } from '../../../../Interfaces/Cell';
import { createEnemyPokemonsApi, fetchBoardCellsApi, gameTurnEffectApi } from '../../../../Service/Api';
import s from './style.module.css';

type StepOwn = 'WE' | 'ENEMY';

interface PageErrors {
    fetchBoardError?: any;
    createEnemyPokemons?: any;
}

export const BoardPage = (): JSX.Element => {

    const [board, setBoard] = useState<Cell[]>([]);
    const [enemyPokemons, setEnemyPokemons] = useState<Pokemon[]>([]);
    const [stepOwn, setStepOwn] = useState<StepOwn>('ENEMY');
    const [errors, setErrors] = useState<PageErrors | null>(null);
    const [currentCard, setCurrentCard] = useState<Pokemon | null>(null);
    const { pokemons } = useContext(PokemonContext);
    const { replace: routeReplace } = useHistory();

    // if (!pokemons || pokemons.length === 0) {
    //     routeReplace('/game/');
    // }

    useEffect(() => {
        fetchBoard();
        createEnemyPokemons();
    }, []);

    const fetchBoard = async() => {
        try {
            const cells = await fetchBoardCellsApi();
            setBoard(cells);
        } catch(e) {
            setErrors(prev => {
                return {
                    ...prev,
                    fetchBoardError: e
                }
            });
        }
    }

    const createEnemyPokemons = async() => {
        try {
            const pokemons = await createEnemyPokemonsApi();
            setEnemyPokemons(pokemons);
        } catch(e) {
            setErrors(prev => {
                return {
                    ...prev,
                    createEnemyPokemons: e
                }
            })
        }
    }

    const makeGameTurn = async(position: number, card: Pokemon, board: Cell[]): Promise<void> => {
        try {

            const response = await gameTurnEffectApi(position, card, board);
            setStepOwn(prev => prev === 'WE' ? 'ENEMY' : 'WE');
            setBoard(() => response);

        } catch (e) {

        }
    }

    const handleClickBoardPlate = (cell: Cell): void => {

        if (currentCard) {
            makeGameTurn(cell.position, currentCard, board);
        }
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {pokemons && <PlayerBoard pokemonCards={pokemons} onCardClick={setCurrentCard} disabled={stepOwn === 'ENEMY'}/> }
            </div>
            <div className={s.board}>
                { [...board.slice(0, 9)].map(cell => (
                    <div className={s.boardPlate} key={cell.position} onClick={() => handleClickBoardPlate(cell) }>
                        { cell.card && (
                            <PokemonCard pokemon={cell.card} minimize />
                        )}
                    </div>
                ))}
            </div>
            <div className={s.playerTwo}>
                { enemyPokemons && <PlayerBoard pokemonCards={enemyPokemons} onCardClick={setCurrentCard}disabled={stepOwn === 'WE'}/>}
            </div>
        </div>
    )
}
