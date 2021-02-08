import { PokemonValues } from "../../Interfaces";
import s from './style.module.css';
import cardBackSide from './card-back-side.jpg';
import classnames from 'classnames';
interface PokemonCardProps {
    id: number | string;
    name: string;
    img: string;
    values: PokemonValues;
    type: string;
    isActive?: boolean;
    onClick?: () => void;
    minimize?: boolean;
    className?: string;
}

const PokemonCard = ({ id, name, img, values, type, isActive, onClick, minimize, className}: PokemonCardProps): JSX.Element => {

    return (
        <div className={s.root} onClick={onClick}>
            <div className={classnames(className, s.pokemonCard, { [s.active]: isActive })}>
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
        </div>
    )
}

export default PokemonCard;