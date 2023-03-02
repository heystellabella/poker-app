import { useState } from "react"
import hands from "./HandData"
import HandWidgets from "./HandWidgets"

function Hands() {
    const [unselectedHands, setUnselectedHands] = useState(hands)
    const [selectedHands, setSelectedHands] = useState([])
    const [currentDragged, setCurrentDragged] = useState(null)

    function handleOnDropSelected(e) {
        // Stops user from draggin into the same area
        if(selectedHands.includes(currentDragged)) {
            return
        } else {
            setSelectedHands([...selectedHands, currentDragged])
        }
        

        let newUnselected = []
        for (let i = 0; i < unselectedHands.length; i++) {
            if (unselectedHands[i] !== currentDragged) {
                newUnselected.push(unselectedHands[i])
            }
        }
        setUnselectedHands(newUnselected)
    }

    function handleOnDropUnselected(e) {
        // Stops user from dragging into the same area
        if(unselectedHands.includes(currentDragged)) {
            return
        } else {
            setUnselectedHands([...unselectedHands, currentDragged])
        }

        let newSelected = []
        for (let i = 0; i < selectedHands.length; i++) {
            if (selectedHands[i] !== currentDragged) {
                newSelected.push(selectedHands[i])
            }

        }
        setSelectedHands(newSelected)
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

    return (
        <div>

            <div id="unselectedSection" onDrop={handleOnDropUnselected} onDragOver={handleDragOver}>
                <HandWidgets key={hands} hands={unselectedHands} onDrag={onDrag}></HandWidgets>
            </div>

            <div id="selectedSection" onDrop={handleOnDropSelected} onDragOver={handleDragOver} style={{ border: "1px red solid", height: "300px" }}>
                <HandWidgets key={hands} hands={selectedHands}></HandWidgets>
            </div>

        </div>
    )
}

export default Hands
