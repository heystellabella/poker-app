
import HandWidget from "./HandWidget"
import {fireEvent, render, screen} from "@testing-library/react"

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

test("onDrag function is called when the component is dragged", () => {

    // create mock data 
    const hand = {
        name: "Royal Flush",
        ranking: 10,
        id: 10
    }

    // create moch function
    const mockDrag = jest.fn()

    render (
        <HandWidget handCombo={hand} onDrag={mockDrag}></HandWidget>
    )
    
    fireEvent.drag(screen.getByTestId("drag-test"))
    expect(mockDrag).toHaveBeenCalled
})