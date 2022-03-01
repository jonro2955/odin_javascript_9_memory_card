import React from 'react';

const Header = () => {
  return (
    <div id='Header'>
      <h1>Memory Card Game - A ReactJS Project</h1>
      <div id='Instruction'>
        Rules:
          <div>
            The goal of this game is to click all items no more than once.
          </div>
          <div>
            There are a total of 20 items, but only 10 are shown on screen.
          </div>
          <div>
            To win, you must click all 20 items only once by memorizing what
            you've clicked.
          </div>
      </div>
    </div>
  );
};

export default Header;