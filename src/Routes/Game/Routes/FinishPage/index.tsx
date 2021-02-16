import { useContext, useState } from "react"
import PokemonCardsInline from "../../../../Components/PokemonCardsInline";
import { PokemonContext } from "../../../../Context/PokemonContext"
import { Pokemon } from "../../../../Interfaces";
import { createNewFromSample } from "../../../../Service/Api";

export const FinishPage = (): JSX.Element => {

    const { pokemons, enemyPokemons, winResult, resetGame } = useContext(PokemonContext);
    const [selectedCard, setSelectedCard] = useState<Pokemon | null>(null);

    if (!pokemons || !enemyPokemons || !winResult) {
        resetGame && resetGame();
    }

    const handleEndGameClick = async(): Promise<void> => {
        if (winResult === 'WE') {
            if (selectedCard) {

                try {

                    await createNewFromSample(selectedCard);
                    resetGame && resetGame();

                } catch(e) {

                }

            } else {
                alert('Выберите одну карту противника');
            }
        } else {
            resetGame && resetGame();
        }
    }

    return (
        <div>
            <div className="flex">
                <strong>
                    {winResult === 'WE'
                        ? <span>WE WIN ✌️</span>
                        : winResult === 'ENEMY'
                            ? <span>WE LOST 😔</span>
                            : <span>GAME DRAW 😊</span>
                    }
                </strong>
            </div>
            <div className="flex">
                <PokemonCardsInline pokemons={pokemons} />
            </div>
            <div className="flex">
                <button onClick={handleEndGameClick}>
                    END GAME
                </button>
            </div>
            <div className="flex">
                <PokemonCardsInline pokemons={enemyPokemons} onCardClick={pokemon => {

                    if (winResult === 'WE') {
                        setSelectedCard(() => pokemon)
                    }

                }} selectedIds={selectedCard ? [selectedCard.id] : undefined}/>
            </div>
        </div>
    )
}


