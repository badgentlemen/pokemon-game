import { Pokemon } from "../../Interfaces";
import s from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';
import classnames from 'classnames';
import { FunctionComponent } from "react";
interface PokemonCardProps {
    pokemon: Pokemon;
    onClick?: () => void;
    minimize?: boolean;
    className?: string;
    isActive?: boolean;
    disableAnimation?: boolean;
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({ pokemon, isActive, onClick, minimize, className, disableAnimation }): JSX.Element => {

    const { id, name, img, values, type, active, isSelected } = pokemon;

    return (
        <div className={classnames(s.pokemonCard, { [s.animation]: !disableAnimation, [s.simple]: disableAnimation, [s.active]: active || isActive, [s.selected]: isSelected }, className)} onClick={onClick}>
            <div className={s.cardFront}>
                <div className={classnames(s.wrap, s.front)}>
                    <div className={classnames(s.pokemon, s[type])}>
                        <div className={s.values}>
                            <div className={classnames(s.count, s.top)}>{values.top}</div>
                            <div className={classnames(s.count, s.right)}>{values.right}</div>
                            <div className={classnames(s.count, s.bottom)}>{values.bottom}</div>
                            <div className={classnames(s.count, s.left)}>{values.left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        {!minimize && (
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={classnames(s.wrap, s.back)}>
                    <img src={cardBackSide} alt="Сard Backed" />
                </div>
            </div>
        </div>
    )
};

PokemonCard.defaultProps = {
    isActive: true,
    disableAnimation: false
};

export default PokemonCard;