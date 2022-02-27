import React, { useState, useEffect, useRef } from 'react';
import foodDatabase from './foodDatabase.json';
import Header from './Header.js';
import ScoreBoard from './ScoreBoard.js';
import MessageBoard from './MessageBoard.js';
import Card from './Card.js';

const shuffledSubMenu = (baseMenu) => {
  let copy = baseMenu;
  /*swap item at each index with another at a ramdomly selected index*/
  for (let i = 0; i < baseMenu.length; i++) {
    let randomIndex = Math.floor(Math.random() * baseMenu.length);
    let swap = copy[i];
    copy[i] = copy[randomIndex];
    copy[randomIndex] = swap;
  }
  //return only the first 10 items
  return copy.slice(0, 10);
};

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState('Click an image to begin.');
  const [baseMenu, setBaseMenu] = useState(foodDatabase);
  const [screenMenu, setScreenMenu] = useState(shuffledSubMenu(foodDatabase));
  const initialMount = useRef(true);

  const cardClickHandler = (clickTarget) => {
    if (clickTarget.dataset.clicked === 'false') {
      //increment current score
      setCurrentScore(currentScore + 1);
      //display clicked in Message component
      setMessage(`You clicked a new item: ${clickTarget.alt}`);
      //update baseMenu indirectly
      let baseMenuCopy = baseMenu;
      baseMenuCopy.forEach((item) => {
        if (item.name === clickTarget.alt) {
          item.clicked = true;
        }
      });
      setBaseMenu(baseMenuCopy);
      //shuffle the screenMenu using baseMenuCopy
      setScreenMenu(shuffledSubMenu(baseMenuCopy));
    }
    if (clickTarget.dataset.clicked === 'true') {
      //MessageBoard: announce restart
      setMessage(
        `Uh oh! You clicked ${clickTarget.alt} twice. You must now restart. Click an image to begin again.`
      );
      //ScoreBoard: update high score to current score if it is higher
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      //ScoreBoard: reset currentScore to 0
      setCurrentScore(0);
      /********************************************* */
      /**Problem Area:  */
      //Reset baseMenu to orginal
      setBaseMenu(foodDatabase);
      //Reshuffle screenMenu
      setScreenMenu(shuffledSubMenu(foodDatabase));

      /********************************************* */
    }
  };

  useEffect(() => {
    if (initialMount.current) {
      //code to run on mount
      initialMount.current = false;
    } else {
      // code to run only on dependency updates
    }
  }, [baseMenu]);

  return (
    <div id='App'>
      <Header />
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <MessageBoard message={message} />
      <div id='cardGrid'>
        {screenMenu.map((item) => (
          <Card
            key={item.index}
            index={item.index}
            clicked={item.clicked}
            image={item.image}
            name={item.name}
            cardClickHandler={cardClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
