import Divider from '@mui/material/Divider'

function PokerDefinition({pokerWord}) {

    return (
        <div className="pokerDefinition">
            <h4>{pokerWord.word}</h4>
            <p>
                {pokerWord.definition}
            </p>
            <Divider variant="middle" />
        </div>
    )
}

export default PokerDefinition