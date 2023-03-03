import PokerDefinitions from "./PokerDefinitions"

function PokerDictionary() {

    return (
        <div>
            <h2>Poker Dictionary</h2>
            <p>Now you know the rules of how to play poker, the next step is to learn how to talk like a poker pro. Here are the words that every poker player MUST know.</p>
            <div className="pokerVocab">
                <PokerDefinitions></PokerDefinitions>
            </div>
        </div>
    )
}

export default PokerDictionary