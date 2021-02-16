import { FunctionComponent } from "react";
import { Pokemon } from "../../Interfaces";
import PokemonCard from "../PokemonCard";
import style from './style.module.css';

interface PokemonCardsInlineProps {
    pokemons?: Pokemon[];
    selectedIds?: string[];
    onCardClick?: (pokemon: Pokemon) => void;
}

const PokemonCardsInline: FunctionComponent<PokemonCardsInlineProps> = ({pokemons, onCardClick, selectedIds}): JSX.Element => (
    <>
        { pokemons && pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} onClick={() => onCardClick && onCardClick(pokemon)}
                className={style.root} key={pokemon.firebaseKey || pokemon.id} isSelected={selectedIds?.includes(pokemon.id)}/>
        ))}
    </>
)

export default PokemonCardsInline;