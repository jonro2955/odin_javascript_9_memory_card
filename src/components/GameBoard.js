import React, { useState, useEffect } from 'react';
import foodList from './foodList.json';
import uniqid from 'uniqid';

// returns a shuffled array of integers 0-num with no duplicates
function generateRandIntArray(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(i);
  }
  for (let i = 0; i < num; i++) {
    let j = Math.floor(Math.random() * num);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const GameBoard = () => {

  // const [data, setData] = useState(database);
  const [randIntArray, setRandIntArray] = useState(
    generateRandIntArray(foodList.length)
  );

  const randomizeArray = () => {
    setRandIntArray(generateRandIntArray(foodList.length));
  };

  useEffect(() => {});

  return (
    // show 10 cards at a time, with at least one that hasn't been clicked. If all has been clicked, player has won and game is over.
    <div id='GameBoard'>
      <button onClick={randomizeArray}>Randomize</button>
      <div>
        {randIntArray.map((rand) => {
          return (
            <div className='card' key={uniqid()}>
              <img
                src={foodList[rand].image}
                alt={foodList[rand].name}
                width='100'
                height='100'
              ></img>
              <div>{foodList[rand].name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
