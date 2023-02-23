import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
        <h1>Poker Academy</h1>
        <h3 className="tagline">Where professional poker players are made.</h3>
        <div>
            <Tabs></Tabs>
        </div>
    </div>
  );
}

export default App;
