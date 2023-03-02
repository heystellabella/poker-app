import { useState } from "react";
import './PokerHandRankingGame.css'
import HandWidgets from "./HandWidgets"
import hands from "./HandData"
import Hands from "./Hands"

function PokerHandRankingGame() {
    const [widgets, setWidgets] = useState([]);

    // console.log(hands)

    function handleOnDrag(e, widgetType) {
        e.dataTransfer.setData("widgetType", widgetType)
    }

    function handleOnDrop(e) {
        const widgetType = e.dataTransfer.getData("widgetType")
        console.log(widgetType)
        setWidgets([...widgets, widgetType])
    }

    function handleDragOver(e) {
        e.preventDefault();
    }
    return (
        <div className="gamePage">
            <div className="instructions">
                <strong>Instructions: </strong><br/><br/>
                Drag the names of the hand combinations to the drop area in order of strongest to weakest. Strongest at the top, weakest at the bottom.
            </div>
            <div>
                <Hands></Hands>
            </div>


        </div>
    )
}

export default PokerHandRankingGame