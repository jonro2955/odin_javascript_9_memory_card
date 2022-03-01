import React from 'react';

const Header = () => {
  return (
    <div id='Header'>
      <h1>Memory Card Game - A ReactJS Project</h1>
      <div id='Instruction'>
        <div>
          The goal of this game is to click all items only once.
        </div>
        <div>
          There are a total of 20 items, but only 10 are randomly shown.
        </div>
      </div>
    </div>
  );
};

export default Header;
