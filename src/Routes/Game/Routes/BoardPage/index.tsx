import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../Components/PokemonCard';
import { PokemonContext } from '../../../../Context/PokemonContext';
import { Cell } from '../../../../Interfaces/Cell';
import { fetchBoardCells } from '../../../../Service/Api';
import s from './style.module.css';

interface PageErrors {
    fetchBoardError?: any;
}

export const BoardPage = (): JSX.Element => {

    const [board, setBoard] = useState<Cell[]>([]);
    const [errors, setErrors] = useState<PageErrors | null>(null)
    const { pokemons } = useContext(PokemonContext);
    const { replace: routeReplace } = useHistory();

    // if (!pokemons || pokemons.length === 0) {
    //     routeReplace('/game/');
    // }

    useEffect(() => {
        fetchBoard();

    }, []);

    const fetchBoard = async() => {
        try {

            const cells = await fetchBoardCells();
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

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {pokemons && pokemons.map(({ id, name, img, values, type }) => <PokemonCard id={id} isActive name={name} img={img} values={values} type={type} minimize className={s.card} />)}
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    )
}
