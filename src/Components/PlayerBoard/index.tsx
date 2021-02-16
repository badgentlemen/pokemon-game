import { Fragment, FunctionComponent, useState } from "react";
import { Pokemon } from "../../Interfaces";
import PokemonCard from "../PokemonCard";
import style from './style.module.css';
import classnames from 'classnames';
import Arrow from '../../Assets/arrow-down.png';

interface PlayerBoardProps {
    pokemonCards: Pokemon[];
    onCardClick?: (pokemonCard: Pokemon) => void;
    disabled?: boolean;
}

const PlayerBoard: FunctionComponent<PlayerBoardProps> = ({ pokemonCards, onCardClick, disabled }) => {

    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    const handleCardClick = (pokemon: Pokemon): void => {
        if (!disabled) {
            setSelectedPokemon(pokemon);
            onCardClick && onCardClick(pokemon);
        }
    }

    return (
        <Fragment>
            <div className={style.arrowWrapper}>
                { !disabled && <img src={Arrow} alt="arrow-img"/> }
            </div>
            { pokemonCards.map(pokemonCard => (
                <div className={classnames(style.cardBoard, { [style.selected]: selectedPokemon?.id === pokemonCard.id })} key={pokemonCard.firebaseKey || pokemonCard.id}>
                    <PokemonCard pokemon={pokemonCard} onClick={() => handleCardClick(pokemonCard)} minimize isActive />
                </div>
            ))}
        </Fragment>
    );
};

export default PlayerBoard;