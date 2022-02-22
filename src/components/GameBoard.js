import React, { useState } from 'react';

import burger from '../images/burger.webp';
import fries from '../images/fries.webp';
import cake from '../images/cake.webp';
import cookie from '../images/cookie.webp';
import donut from '../images/donut.webp';
import hershey from '../images/hershey.webp';
import iceCream from '../images/iceCream.webp';
import lasagna from '../images/lasagna.webp';
import mcflurry from '../images/mcflurry.webp';
import nugget from '../images/nugget.webp';
import oreo from '../images/oreo.webp';
import pickle from '../images/pickle.webp';
import pizza from '../images/pizza.webp';
import poptart from '../images/poptart.webp';
import smore from '../images/smore.webp';
import taco from '../images/taco.webp';
import waffle from '../images/waffle.webp';

const GameBoard = () => {

  return (
    <div id='GameBoard'>
      <img src={burger} alt='Food card' height='300px' width='300px'></img>
      <img src={fries} alt='Food card' height='300px' width='300px'></img>
      <img src={cake} alt='Food card' height='300px' width='300px'></img>
      <img src={cookie} alt='Food card' height='300px' width='300px'></img>
      <img src={donut} alt='Food card' height='300px' width='300px'></img>
      <img src={burger} alt='Food card' height='300px' width='300px'></img>
      <img src={fries} alt='Food card' height='300px' width='300px'></img>
      <img src={cake} alt='Food card' height='300px' width='300px'></img>
      <img src={cookie} alt='Food card' height='300px' width='300px'></img>
      <img src={donut} alt='Food card' height='300px' width='300px'></img>
    </div>
  );
};

export default GameBoard;
