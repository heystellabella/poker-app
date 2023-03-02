import { useState } from "react"
import hands from "./HandData"
import HandWidgets from "./HandWidgets"

function Hands() {
    const [unselectedHands, setUnselectedHands] = useState(hands)
    const [selectedHands, setSelectedHands] = useState([])
    const [currentDragged, setCurrentDragged] = useState(null)

    function handleOnDropSelected(e) {
        setSelectedHands([...selectedHands, currentDragged])

        let newUnselected = []
        for (let i = 0; i < unselectedHands.length; i++) {
            if (unselectedHands[i] !== currentDragged) {
                newUnselected.push(unselectedHands[i])
            }

        }
        setUnselectedHands(newUnselected)
    }

    function handleOnDropUnselected(e) {

    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function onDrag(hand) {
        setCurrentDragged(hand)
    }

    // console.log(unselectedHands)
    // console.log(selectedHands)
    // console.log("current dragged is:", currentDragged)

    return (<>
        <div onDrop={handleOnDropUnselected} onDragOver={handleDragOver}>
            <HandWidgets hands={unselectedHands} onDrag={onDrag}></HandWidgets>
        </div>

        <div onDrop={handleOnDropSelected} onDragOver={handleDragOver} style={{ border: "1px red solid", height: "300px" }}>
            <HandWidgets hands={selectedHands}></HandWidgets>
        </div>

    </>
    )
}

export default Hands
