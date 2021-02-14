import { useContext } from "react"
import { useHistory } from "react-router-dom";
import PokemonCardsInline from "../../../../Components/PokemonCardsInline";
import { PokemonContext } from "../../../../Context/PokemonContext"

export const FinishPage = (): JSX.Element => {

    const { pokemons, enemyPokemons, winResult } = useContext(PokemonContext);
    const { replace } = useHistory();

    if (!pokemons || !enemyPokemons || !winResult) {
        replace('/game');
    }

    return (
        <div>
            <div className="flex">
                <PokemonCardsInline pokemons={pokemons} />
            </div>
            <div className="flex">

            </div>
            <div className="flex">
                <PokemonCardsInline pokemons={enemyPokemons} />
            </div>
        </div>
    )
}


