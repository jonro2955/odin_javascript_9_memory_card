import React, { useState, useEffect, useRef } from 'react';
import foodList from './foodList.json';
import Card from './Card';

const GameBoard = () => {
  const isInitialMount = useRef(true);

  /* Initialize menu as an array of 10 shuffled integers.
  The menu determines which 10 food items in foodList is displayed */
  const [menu, setMenu] = useState(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // generateTenShuffledIntegers0To(foodList.length)
  );

  const shuffleMenu = () => {
    //shuffle only if there is unclicked item left in foodList
    if (!allJsonFoodClicked(foodList)) {
      let newMenu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      // if (menuAllClicked(newMenu, foodList)) {
      //   alert('All clicked');
      //   newMenu = generateTenShuffledIntegers0To(foodList.length);
      // }
      //create a temporary new menu array
      // let newMenu = generateTenShuffledIntegers0To(foodList.length);
      //while the new temp menu has all clicked items, generate a new one to make sure it has an unclicked
      while (menuAllClicked(newMenu, foodList)) {
        newMenu = generateTenShuffledIntegers0To(foodList.length);
      }
      setMenu(newMenu);
    }
  };

  const cardClickFunction = (clickTarget) => {
    if (clickTarget.dataset.clicked == 'false') {
      console.log('\nPoint!\n');
      foodList[clickTarget.id].clicked = true;
      shuffleMenu();
    }
    if (clickTarget.dataset.clicked == 'true') {
      console.log('\nGameover, restart!\n');
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // Your useEffect code here to be run on update
      console.log('menuAllClicked: ', menuAllClicked(menu, foodList));
    }
  }, [menu]);

  return (
    // show 10 cards at a time, with at least one that hasn't been clicked. If all has been clicked, player has won and game is over.
    <div id='GameBoard'>
      <button onClick={shuffleMenu}>Randomize</button>
      <div id='cardGrid'>
        {menu.map((pickNum) => {
          return (
            <Card
              key={foodList[pickNum].index}
              foodIndex={foodList[pickNum].index}
              foodName={foodList[pickNum].name}
              imageURL={foodList[pickNum].image}
              clickStatus={foodList[pickNum].clicked}
              onClickFunction={cardClickFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;

/* Create a shuffled array of integers 0-num with no duplicates, 
  then return a subset array with only the first 10 items*/
function generateTenShuffledIntegers0To(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  /*switch the item at each consecutive index position with one at a 
    ramdomly selected index position*/
  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * num);
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array.slice(0, 10);
}

// Tester to return true if all items in foodList.json is clicked
const allJsonFoodClicked = (jsonList) => {
  return jsonList.every((food) => {
    return food.clicked;
  });
};

/**Tester to see if input menu has all clicked items in jsonList */
const menuAllClicked = (menu, jsonList) => {
  return menu.every((i) => {
    return jsonList[i].clicked === true;
  });
};

/**Tester to see if input menu has some unclicked items in jsonList */
const menuHasUnclickedItems = (menu, jsonList) => {
  return menu.some((i) => {
    return jsonList[i].clicked === false;
  });
};
