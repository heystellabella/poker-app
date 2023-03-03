import { useState } from "react"
import hands from "./HandData"
import HandWidgets from "./HandWidgets"

function Hands() {

    // randomise hands
    function randomise(arr) {
        let currentIndex = arr.length,  randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex --;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }

    const [unselectedHands, setUnselectedHands] = useState(randomise(hands))
    const [selectedHands, setSelectedHands] = useState([])
    const [currentDragged, setCurrentDragged] = useState(null)
    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    
    function toggleModal() {
        setModal(!modal)
    }

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

    function handleSubmit() {

        if (selectedHands.length !== 10) {
            setModalContent("You're missing a few hand combos! Close this box and keep going!")
            toggleModal()
        } else {
            let rankCounter = 10
            for (let i=0; i<selectedHands.length; i++) {
                if(selectedHands[i].ranking === rankCounter) {
                    rankCounter = rankCounter - 1
                } else {
                    setModalContent("Incorrect, bad luck! Close this box and try again!")
                    toggleModal()
                    return
                }
            }
            setModalContent("Thats right! Congratulations, you're a pokerstar!")
            toggleModal()
        }
    }

    function handleReset() {
        setUnselectedHands(randomise(hands))
        setSelectedHands([])
        setModal(false)
        setModalContent(null)
    }

    return (
        <div>
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
            <div className="submitSection">
                <button className="resetButton" onClick={handleReset}>Reset</button>
                <input className="submitButton" type="submit" onClick={handleSubmit}></input>
            </div>

            { modal &&
                (<div className="modal">
                <div className="overlay" onClick={toggleModal}>
                    <div className="modalContent">
                        <h2>Result</h2>
                        
                            {modalContent}
                        
                        <button className="closeButton" onClick={toggleModal}>CLOSE</button>
                    </div>
                </div>
                </div>)
            }


        </div>

    )
}

export default Hands
