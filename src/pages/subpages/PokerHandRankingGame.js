import { useState } from "react";
import './PokerHandRankingGame.css'

function PokerHandRankingGame() {
    const [widgets, setWidgets] = useState([]);

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
                Drag the names of the hand combinations to the drop area in order of strongest to weakest
            </div>

            <div className="gameArea">


                <div className="widgets">
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Royal Flush")
                    }}>
                        Royal Flush
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Straight Flush")
                    }}>
                        Straight Flush
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Four of a Kind")
                    }}>
                        Four of a Kind
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Full House")
                    }}>
                        Full House
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Flush")
                    }}>
                        Flush
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Straight")
                    }}>
                        Straight
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Three of a Kind")
                    }}>
                        Three of a Kind
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "Two Pair")
                    }}>
                        Two Pair
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "One Pair")
                    }}>
                        One Pair
                    </div>
                    <div className="widget" draggable onDragStart={(e) => {
                        handleOnDrag(e, "High Card")
                    }}>
                        High Card
                    </div>
                </div>

                <div className="dropArea" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    Drop your answer here.
                    {widgets.map((widget) => <div className="widget">{widget} </div>)}
                </div>

            </div>
        </div>
    )
}

export default PokerHandRankingGame