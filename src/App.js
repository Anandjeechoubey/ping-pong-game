import './App.css';
import React from 'react';
import Game from './Game';

function App() {
  const [page, setPage] = React.useState('Start');
  const [player1, setPlayer1] = React.useState('Player 1');
  const [player2, setPlayer2] = React.useState('Player 2');

  const togglePage = () => {
    if (page === 'Save')
      setPage('Start')
    else
      setPage('Save')
  }

  const props = {
    player1: player1,
    player2: player2,
  }
  return (
    <div className="App">
      <div className="card">
        <h2>Ping Pong Game</h2>
        {
          page === 'Start' ? 
          <div className="home">
            <h4>Player 1 Name</h4>
            <input value={player1} onChange={(e) => {setPlayer1(e.target.value)}}/>
            <h4>Player 2 Name</h4>
            <input value={player2} onChange={(e) => {setPlayer2(e.target.value)}}/>
          </div>
         : <Game {...props} />
        }
        <button onClick={togglePage}><h3>{page} Game</h3></button>
      </div>
    </div>
  );
}

export default App;
