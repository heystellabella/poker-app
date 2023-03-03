import { Route, Routes, Link } from "react-router-dom"
import PokerDictionaryGame from "./subpages/PokerDictionaryGame"
import PokerHandRankingGame from "./subpages/PokerHandRankingGame"

function TestYourSkills() {
    // let { path, url } = useRouteMatch()
    return (
        <div>
            <h2>Test Your Skills</h2>
            Test what you've learnt with our fun, educational games! Click one of the links below to get started.<br />
            <div className="subNavBar">
                <nav>
                    <p className="navLink"><Link to="poker-hand-ranking-game">Poker Hand Ranking Game</Link></p>
                    <p className="navLink"><Link to="poker-dictionary-game">Poker Dictionary Game</Link></p>
                </nav>
            </div>

            <Routes>
                <Route path="poker-dictionary-game" element={<PokerDictionaryGame></PokerDictionaryGame>} />
                <Route path="poker-hand-ranking-game" element={<PokerHandRankingGame></PokerHandRankingGame>} />
            </Routes>
        </div>
    )
}

export default TestYourSkills