function PokerDefinition({pokerWord}) {

    return (
        <div className="pokerDefinition">
            <h4>{pokerWord.word}</h4>
            <p>
                {pokerWord.definition}
            </p>
        </div>
    )
}

export default PokerDefinition