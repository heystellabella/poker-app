// This component renders a single widget of the hand combination

function HandWidget({handCombo, onDrag}) {

    // console.log(handCombo)

    function handleOnDrag(e, handCombo) {
        // e.dataTransfer.setData("text", handCombo.name)
        onDrag(handCombo)
    }
    
    return (
        <div className="widget" draggable onDragStart={(e) => {
            handleOnDrag(e, handCombo)
        }}>
            {handCombo.name}
        </div>
    )
}

export default HandWidget