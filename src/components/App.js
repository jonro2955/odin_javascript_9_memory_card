import React, { useState } from 'react'; 
import Header from './Header.js'; 
import Instruction from './Instruction.js'; 
import ScoreBoard from './ScoreBoard.js'; 
import MessageBoard from './MessageBoard.js'; 
import GameBoard from './GameBoard.js'; 

const App = () => {
  const [count, setCount] = useState(0);


  return (
    <div id='App'>
      <Header />
      <Instruction/>
      <ScoreBoard />
      <MessageBoard/>
      <GameBoard/>
    </div>
  );
};

export default App;
