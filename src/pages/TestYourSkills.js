import { Route, Routes, Link } from "react-router-dom"
import PokerDictionaryGame from "./subpages/PokerDictionaryGame"
import PokerHandRankingGame from "./subpages/PokerHandRankingGame"

const pokerDictionary = {
    "check": "to decline to bet",
    "bet": "to put chips in the pot",
    "fold": "to forfeit one's cards",
    "call": "to match the highest bet made",
    "raise": "making a greater bet than the highest bet made",
    "pot": "the pool of chips from all player's wagers",
    "small blind": "a forced bet, typically half of the big blind",
    "big blind": "a forced bet"
}

const handRankings = {
    1: "Royal Flush",
    2: "Straight Flush",
    3: "Four of a Kind",
    4: "Full House",
    5: "Flush",
    6: "Straight",
    7: "Three of a Kind",
    8: "Two Pair",
    8: "One Pair",
    8: "High Card",
}

function TestYourSkills() {
    // let { path, url } = useRouteMatch()
    return (
        <div>
            <h2>Test Your Skills</h2>
            Test what you've learnt with our fun, educational games!<br /><br />

            Click one of the links below to get started.<br />
            <div className="subNavBar">
                <nav>
                    <p className="navLink"><Link to="poker-dictionary-game">Poker Dictionary Game</Link></p>
                    <p className="navLink"><Link to="poker-hand-ranking-game">Poker Hand Ranking Game</Link></p>
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