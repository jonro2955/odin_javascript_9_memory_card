import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const GameBoard = (props) => {
  const { screenMenu, foodDatabase, cardClickFunction, shuffleScreenMenu } =
    props;

  return (
    <div id='GameBoard'>
      <div id='cardGrid'>
      </div>
    </div>
  );
};

export default GameBoard;
