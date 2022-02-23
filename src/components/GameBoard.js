import React, { useState, useEffect } from 'react';
import database from './database.json';
import uniqid from 'uniqid';

// returns a shuffled array of integers 0-17 with no duplicates
function generateRandArray18() {
  let array18 = [];
  for (let i = 0; i < 18; i++) {
    array18.push(i);
  }
  for (let i = 0; i < 18; i++) {
    let j = Math.floor(Math.random() * 18);
    let temp = array18[i];
    array18[i] = array18[j];
    array18[j] = temp;
  }
  return array18;
}

const GameBoard = () => {
  const [data, setData] = useState(database);
  const [randArray18, setRandArray18] = useState(generateRandArray18());

  const randomizeArray = () => {
    setRandArray18(generateRandArray18());
  };

  useEffect(() => {});

  return (
    // show 10 cards at a time, with at least one that hasn't been clicked. If all has been clicked, player has won and game is over.
    <div id='GameBoard'>
      <div>
        {randArray18.map((rand) => {
          return (
            <div className='card' key={uniqid()}>
              <img
                src={data[rand].image}
                alt={data[rand].name}
                width='100'
                height='100'
              ></img>
            </div>
          );
        })}
      </div>
      <button onClick={randomizeArray}>Randomize</button>
    </div>
  );
};

export default GameBoard;
