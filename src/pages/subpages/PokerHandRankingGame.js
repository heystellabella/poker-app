import './PokerHandRankingGame.css'
import Hands from "./Hands"

function PokerHandRankingGame() {

    return (
        <div className="gamePage">
            <div className="instructions">
                <strong>Instructions: </strong><br/><br/>
                Drag the names of the hand combinations to the drop area in order of strongest to weakest. Strongest at the top, weakest at the bottom.
            </div>
            <div className="gameSection">
                <Hands></Hands>
            </div>


        </div>
    )
}

export default PokerHandRankingGame