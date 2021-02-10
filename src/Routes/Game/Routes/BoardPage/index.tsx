import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from '../../../../Components/PokemonCard';
import { PokemonContext } from '../../../../Context/PokemonContext';
import s from './style.module.css';

export const BoardPage = (): JSX.Element => {

    const { pokemons } = useContext(PokemonContext);
    const { push: historyPush } = useHistory();

    if (!pokemons || pokemons.length === 0) {
        historyPush('/game/');
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                { pokemons && pokemons.map(({id, name, img, values, type}) => <PokemonCard id={id} isActive name={name} img={img} values={values} type={type} minimize className={s.card} />)}
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
