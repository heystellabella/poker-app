import { useState } from "react"
import hands from "./HandData"
import HandWidgets from "./HandWidgets"

function Hands() {
    const [unselectedHands, setUnselectedHands] = useState(hands)
    const [selectedHands, setSelectedHands] = useState([])
    const [currentDragged, setCurrentDragged] = useState(null)

    function handleOnDropSelected(e) {
        
        setSelectedHands([...selectedHands, currentDragged])
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function onDrag(hand) {
        console.log(hand)
        setCurrentDragged(hand)
    }
    console.log(unselectedHands)
    console.log(selectedHands)
    return ( <>
        <HandWidgets hands={unselectedHands} onDrag={onDrag}></HandWidgets>
        <div onDrop={handleOnDropSelected} onDragOver={handleDragOver} style={{border: "1px red solid", height: "300px"}}>
            <HandWidgets hands={selectedHands}></HandWidgets>
        </div>

        </>
    )
}

export default Hands
