
import HandWidget from "./HandWidget"
import {render, screen} from "@testing-library/react"

test("draggable button is rendered", () => {
    // create mock data 
    const hand = {
        name: "Royal Flush",
        ranking: 10,
        id: 10
    }

    // Rendering the component we are testing and passing through the mock data
    render(
        <HandWidget handCombo={hand}></HandWidget>
    )
    
    // Assertion: screen should render the name of the hand combo
    expect(screen.getByText(hand.name)).not.toBeNull
})