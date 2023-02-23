import { useState } from "react"
import "./Tabs.css"

const headings = [
  'Home', 'How to Play', 'Test Your Skills'
]
const content = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tabe does its own thing'
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)
  
  return <div className="Tabs">
    <div className="tablist" role="tablist">
      { headings.map((text, idx) => {
        return <TabHeading
          key={text}
          control_index={idx}
          onClick={() => {setSelectedTab(idx)}}
          selected={selectedTab === idx} //this is a boolean
          title={headings[idx]}/>
      })}
    </div> <br/>
    <div role="tabpanel" className="tabcontent" aria-labelledby={headings[selectedTab]}>{content[selectedTab]}</div>
  </div>
}

function TabHeading(props) {
  return <button role="tab" aria-controls={"tabpanel"}
    onClick={props.onClick}
    aria-selected={props.selected}
    className={props.selected ? 'tab selected': 'tab'}>
    {props.title}
  </button>
}

export default Tabs