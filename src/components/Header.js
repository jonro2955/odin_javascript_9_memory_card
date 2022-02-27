import React from 'react';

const Header = () => {
  return (
    <div id='Header'>
      <h1>Memory Card Game (A ReactJS Project)</h1>
      <div id='Instruction'>
        Rules: The goal of this game is to click all items no more than once. 
        There are a total of 20 items, but only 10 randomly selected items are 
        shown on screen at any one time. To win, you must click all 20 items 
        only once by memorizing what you've clicked. Clicking an item twice will 
        result in an automatic restart. 
      </div>
    </div>
  );
};

export default Header;