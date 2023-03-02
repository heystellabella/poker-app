import { useState } from "react"
import hands from "./HandData"
import HandWidgets from "./HandWidgets"

function Hands() {

    // randmise hands
    function randomise(arr) {
        let currentIndex = arr.length,  randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex --;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }

    const randomHands = randomise(hands)
    const [unselectedHands, setUnselectedHands] = useState(randomHands)
    const [selectedHands, setSelectedHands] = useState([])
    const [currentDragged, setCurrentDragged] = useState(null)

    function handleOnDropSelected() {
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

    function handleOnDropUnselected() {
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
        <div className="gameArea">

            <div className="unselectedSection" onDrop={handleOnDropUnselected} onDragOver={handleDragOver}>
                <h3>Move these:</h3>
                <div className="widgets">
                    <HandWidgets key={hands} hands={unselectedHands} onDrag={onDrag}></HandWidgets>
                </div>

            </div>

            <div className="selectedSection" onDrop={handleOnDropSelected} onDragOver={handleDragOver}>
                <h3>To here:</h3>
                <div className="widgets">
                    <HandWidgets key={hands} hands={selectedHands} onDrag={onDrag}></HandWidgets>
                </div>

            </div>

        </div>
    )
}

export default Hands
