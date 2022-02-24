import React from 'react';

const Header = () => {
  return (
    <div id='Header'>
      <h1>Memory Card Game</h1>
      <div id='Instruction'>
        Rules: To win this game, you must click all 20 items only once by memorizing each item you've clicked. Clicking an item more than once will result in a game over and an automatic restart from 0.
      </div>
    </div>
  );
};

export default Header;
