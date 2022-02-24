import React, { useState, useEffect } from 'react';
import foodList from './foodList.json';
import Card from './Card';

/* Create a shuffled array of integers 0-num with no duplicates, 
then return an array with only the first 10 items*/
function generateTenShuffledIntegers0To(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  /*switch the item at each consecutive menuIndex position with one at a 
  ramdom menuIndex position*/
  for (let i = 0; i < num; i++) {
    let randomIndex = Math.floor(Math.random() * num);
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array.slice(0, 10);
}

const GameBoard = () => {
  /* initialize menuArray as a shuffled array of 10 integers from 
  0 to foodList.length using useState() */
  const [menuArray, setMenuArray] = useState(
    generateTenShuffledIntegers0To(foodList.length)
  );

  // Returns true if all items in foodList.json has a "clicked" value of true
  const isAllAvailableFoodClicked = () => {
    return foodList.every((food) => {
      return food.clicked;
    });
  };

  /* Randomising menuArray is only done if not all items in 
  foodList.json are "clicked" and randomisation must take place until 
  menuArray contains at least one int i for which 
  foodList[i].clicked === false*/
  const randomizeMenuArray = () => {
    if (!isAllAvailableFoodClicked()) {
      do {
        setMenuArray(generateTenShuffledIntegers0To(foodList.length));
      } while (
        menuArray.every((i) => {
          return foodList[i].clicked === false;
        })
      );
    }
  };

  const cardClickFunction = (clickTarget) => {
    let clickedFoodIndex = clickTarget.id;
    foodList[clickedFoodIndex].clicked = true;
    randomizeMenuArray();
    console.log(foodList);
  };

  useEffect(() => {});

  return (
    // show 10 cards at a time, with at least one that hasn't been clicked. If all has been clicked, player has won and game is over.
    <div id='GameBoard'>
      <button onClick={randomizeMenuArray}>Randomize</button>
      <div id='cardGrid'>
        {menuArray.map((pickNum) => {
          return (
            <Card
              key={foodList[pickNum].menuIndex}
              id={foodList[pickNum].menuIndex}
              foodName={foodList[pickNum].name}
              imageURL={foodList[pickNum].image}
              onClickFunction={cardClickFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
