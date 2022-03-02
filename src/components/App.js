import React, { useState, useEffect, useRef } from 'react';
import foodDatabase from './foodDatabase.json';
import Header from './Header.js';
import ScoreBoard from './ScoreBoard.js';
import MessageBoard from './MessageBoard.js';
import Card from './Card.js';
import CheatBox from './CheatBox.js';

const allClicked = (list) => {
  return list.every((item) => {
    return item.clicked;
  });
};

const shuffledSubMenu = (baseMenu) => {
  let copy = baseMenu;
  if (!allClicked(copy)) {
    //do while: shuffle untill the first 10 items has an unclicked item
    do {
      //shuffling: swap an item at each index with another at a ramdom index
      for (let i = 0; i < baseMenu.length; i++) {
        let randomIndex = Math.floor(Math.random() * baseMenu.length);
        let swap = copy[i];
        copy[i] = copy[randomIndex];
        copy[randomIndex] = swap;
      }
    } while (allClicked(copy.slice(0, 10)));
  }
  return copy.slice(0, 10);
};

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cheatData, setCheatData] = useState('');
  const [message, setMessage] = useState('Click on an image to begin.');
  const [screenMenu, setScreenMenu] = useState(shuffledSubMenu(foodDatabase));
  const initialMount = useRef(true);

  const cardClickHandler = (clickTarget) => {
    //if clicked on unclicked item
    if (clickTarget.dataset.clicked === 'false') {
      //mark the clicked item as clicked in foodDatabase
      foodDatabase.forEach((item) => {
        if (item.name === clickTarget.alt) {
          item.clicked = true;
        }
      });
      //update cheatData
      let cheatString = cheatData + clickTarget.alt.toUpperCase() + ' ';
      setCheatData(cheatString);
      //increment current score
      let newScore = currentScore === 20 ? 1 : currentScore + 1;
      setCurrentScore(newScore);
      /*Check for win:*/
      if (allClicked(foodDatabase)) {
        setMessage('You win!!! To play again, simply click an image.');
        //reset foodDatabase
        foodDatabase.forEach((item) => {
          item.clicked = false;
        });
        setScreenMenu(shuffledSubMenu(foodDatabase));
        setHighScore(20);
        setCheatData('');
      } else {
        //not won yet
        setMessage(`You clicked a new item: ${clickTarget.alt.toUpperCase()}`);
        setScreenMenu(shuffledSubMenu(foodDatabase));
      }
    }
    //if re-clicked on clicked item (lost)
    if (clickTarget.dataset.clicked === 'true') {
      //Restart message
      setMessage(
        `Uh oh! You clicked ${clickTarget.alt.toUpperCase()} twice. You must now restart. Click an image to begin again.`
      );
      //ScoreBoard: update high score to current score if it is higher
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      //ScoreBoard: reset currentScore to 0
      setCurrentScore(0);
      //Reset foodDatabase to orginal and reshuffle
      foodDatabase.forEach((item) => {
        item.clicked = false;
      });
      setScreenMenu(shuffledSubMenu(foodDatabase));
      setCheatData('');
    }
  };

  useEffect(() => {
    if (initialMount.current) {
      //code to run on mount
      initialMount.current = false;
    } else {
      // code to run only on dependency updates
      console.log('\nUnclicked items on screen:');
      screenMenu.forEach((food) => {
        if (!food.clicked) {
          console.log(food.name);
        }
      });
    }
  }, [screenMenu]);

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
      <CheatBox cheatData={cheatData} />
    </div>
  );
};

export default App;
