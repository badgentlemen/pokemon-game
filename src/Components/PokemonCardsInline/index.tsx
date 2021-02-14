import { FunctionComponent } from "react";
import { Pokemon } from "../../Interfaces";
import PokemonCard from "../PokemonCard";
import style from './style.module.css';

interface PokemonCardsInlineProps {
    pokemons?: Pokemon[];
    onCardClick?: (pokemon: Pokemon) => void;
}

const PokemonCardsInline: FunctionComponent<PokemonCardsInlineProps> = ({pokemons, onCardClick}): JSX.Element => (
    <>
        { pokemons && pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} onClick={() => onCardClick && onCardClick(pokemon)}
                className={style.root} key={pokemon.firebaseKey || pokemon.id}/>
        ))}
    </>
)

export default PokemonCardsInline;