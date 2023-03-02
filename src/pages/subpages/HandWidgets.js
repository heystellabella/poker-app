// This component renders all the hand combination widgets using the HandWidget component

import HandWidget from "./HandWidget"

function HandWidgets({hands, onDrag}) {
    // hands is an array of objects, each object being a hand combo
    // console.log(hands)
    return (
        <>

        {hands.map((hand) => {
            // takes each object element as props
            // console.log(hand);
            return(
                <HandWidget key={hand.id} handCombo={hand} onDrag={onDrag}></HandWidget>
            ) 
        })}
        </>
    )
}

export default HandWidgets