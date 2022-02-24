import React from 'react'; 
import Header from './Header.js'; 
import ScoreBoard from './ScoreBoard.js'; 
import MessageBoard from './MessageBoard.js'; 
import GameBoard from './GameBoard.js'; 

const App = () => {

  return (
    <div id='App'>
      <Header />
      <ScoreBoard />
      <MessageBoard/>
      <GameBoard/>
    </div>
  );
};

export default App;
