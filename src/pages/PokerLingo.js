const pokerDictionary = {
    "check": "to decline to bet",
    "bet": "to put chips in the pot",
    "fold": "to forfeit one's cards",
    "call": "to match the highest bet made",
    "raise": "making a greater bet than the highest bet made",
    "pot": "the pool of chips from all player's wagers",
    "small blind": "a forced bet, typically half of the big blind",
    "big blind": "a forced bet"
}

function pokerDefinition(pokerDictionary) {
    for (const term in pokerDictionary) {
        
    }
}

function PokerLingo() {

    return (
        <div>
            <h2>Poker Dictionary</h2>
            <p>Now you know the rules of how to play poker, the next step is to learn how to talk like a poker pro. Here are the words that every poker player MUST know.</p>
            <div id="pokerVocab">
            

            </div>
        </div>
    )
}

export default PokerLingo