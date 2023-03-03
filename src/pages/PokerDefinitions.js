import PokerDefinition from "./PokerDefinition"
import pokerDictionary from "./PokerDictionaryData"

function PokerDefinitions() {
    return (
        <div>
            {pokerDictionary.map((pokerWord, index) => {

                return (
                    <PokerDefinition key={index} pokerWord={pokerWord}></PokerDefinition>
                )
            })}
            
        </div>
    )
}

export default PokerDefinitions