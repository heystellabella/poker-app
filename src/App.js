
import { Route, Routes, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home.js"
import HowToPlay from "./pages/HowToPlay.js"
import HandRankings from "./pages/HandRankings.js"
import PokerDictionary from "./pages/PokerDictionary.js"
import TestYourSkills from "./pages/TestYourSkills.js"
import './App.css'
// import { Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>Stella's Poker Academy</h1>
        <h3 id="tagline">Where professional poker players are made.</h3>
        <nav>
            <p className="navLink"><Link to="/" underline="hover">Home</Link></p>
            <p className="navLink"><Link to="/how-to-play">How to Play</Link></p>
            <p className="navLink"><Link to="/hand-rankings">Hand Rankings</Link></p>
            <p className="navLink"><Link to="/poker-dictionary">Poker Dictionary</Link></p>
            <p className="navLink"><Link to="/test-your-skills">Test Your Skills</Link></p>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/how-to-play" element={<HowToPlay></HowToPlay>} />
        <Route path="/hand-rankings" element={<HandRankings></HandRankings>} />
        <Route path="/poker-dictionary" element={<PokerDictionary></PokerDictionary>} />
        <Route path="/test-your-skills/*" element={<TestYourSkills></TestYourSkills>} />
      </Routes>
    </div>
  );
}

export default App;
