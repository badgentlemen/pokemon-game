import { PokemonValues } from "../../Interfaces";
import s from './style.module.css';
import cardBackSide from './card-back-side.jpg';
import { useState } from "react";
import classnames from 'classnames';
interface PokemonCardProps {
    id: number;
    name: string;
    img: string;
    values: PokemonValues;
    type: string;
}

const PokemonCard = ({ id, name, img, values, type }: PokemonCardProps): JSX.Element => {

    const [isActive, setActive] = useState<boolean>(false);

    const handleCardClick = (): void => setActive(!isActive);

    return (
        <div className={s.root} onClick={handleCardClick}>
            <div className={classnames(s.pokemonCard, {[s.active]: isActive})}>
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
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>Type: <span>{type}</span></small>
                            </div>
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