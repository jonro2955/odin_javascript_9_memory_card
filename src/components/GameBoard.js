import React, { useState, useEffect, useRef } from 'react';
import foodDatabase from './foodDatabase.json';
import Card from './Card';

const GameBoard = () => {
  //useRef hook allows you to store values that persists between renders, unlike useState
  const initialMount = useRef(true);
  /* "screenMenu" state is an array of 10 id picks from foodDatabase. */
  const [screenMenu, setScreenMenu] = useState(
    generateTenShuffledPicks(foodDatabase.length)
  );

  // useEffect()
  useEffect(() => {
    if (initialMount.current) {
      //code to run on mount
      initialMount.current = false;
    } else {
      // code to run only on dependency updates
      printUnclickedItemsOnScreen(screenMenu);
    }
  }, [screenMenu]);

  function cardClickFunction(clickTarget) {
    if (clickTarget.dataset.clicked === 'false') {
      /****************************************
       * clicked on unclicked food
       ****************************************/
      foodDatabase[clickTarget.id].clicked = true;
      // ScoreBoard: add 1 point to streak
      //check win
      if (allDatabaseItemsClicked()) {
        console.log('Win!');
        //MessageBoard: announce win
      } else {
        shuffleScreenMenu();
      }
    }
    if (clickTarget.dataset.clicked === 'true') {
      /****************************************
       * click on clicked food
       ****************************************/
      console.log('\nGameover, restart!\n');
      //MessageBoard: announce restart
      //ScoreBoard: update high score to current streak if streak is higher
      //ScoreBoard: reset streak to 0
    }
  }

  //Log which screenmenu items hasn't been clicked
  function printUnclickedItemsOnScreen(array) {
    let unclickedScreenMenuSubset = array.filter((num) => {
      return !foodDatabase[num].clicked;
    });
    console.log(
      '\n\nUnclicked items on screen: ',
      unclickedScreenMenuSubset.length
    );
    unclickedScreenMenuSubset.forEach((num) => {
      console.log(foodDatabase[num].name);
    });
    console.log(
      'Unclicked items in database: ',
      foodDatabaseUnclickedSubset().length
    );
  }

  //returns an array containing 10 integers 0-limit shuffled
  function generateTenShuffledPicks(limit) {
    let array = [];
    for (let i = 0; i < limit; i++) {
      array.push(i);
    }
    /*switch the item at each consecutive index position with one at a 
    ramdomly selected index position*/
    for (let i = 0; i < limit; i++) {
      let randomIndex = Math.floor(Math.random() * limit);
      let temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    //reduce it to first 10 items
    return array.slice(0, 10);
  }

  /*shuffle screen menu by setting screenMenu state to generateTenShuffledPicks 
  containing at least one unclicked number */
  function shuffleScreenMenu() {
    //First make sure there is an unclicked item left in foodDatabase
    if (!allDatabaseItemsClicked()) {
      let tempArray;
      do {
        console.log('\n************Shuffle!************\n');
        tempArray = generateTenShuffledPicks(foodDatabase.length);
      } while (arrayAllClicked(tempArray));
      setScreenMenu(tempArray);
    }
  }

  //returns true if all foodDatabase items are clicked
  function allDatabaseItemsClicked() {
    return foodDatabase.every((food) => {
      return food.clicked;
    });
  }

  //returns number Of Database Items Unclicked
  function foodDatabaseUnclickedSubset() {
    return foodDatabase.filter((food) => {
      return !food.clicked;
    });
  }

  //returns true if passed in array's numbers are all clicked
  function arrayAllClicked(numArray) {
    return numArray.every((i) => {
      return foodDatabase[i].clicked === true;
    });
  }

  return (
    <div id='GameBoard'>
      <button onClick={shuffleScreenMenu}>Randomize</button>
      <div id='cardGrid'>
        {/* screenMenu array determines foods shown on screen */}
        {screenMenu.map((num) => {
          return (
            <Card
              key={foodDatabase[num].index}
              foodIndex={foodDatabase[num].index}
              foodName={foodDatabase[num].name}
              imageURL={foodDatabase[num].image}
              clickStatus={foodDatabase[num].clicked}
              onClickFunction={cardClickFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
