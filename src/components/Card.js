import React from 'react';

function Card(props) {
  return (
    <div id='Card'>
      <img
        className='cardImage'
        id={props.index}
        src={props.image}
        alt={props.name}
        data-clicked={props.clicked}
        onClick={(e) => props.cardClickHandler(e.target)}
      ></img>
      <div className='cardName'>{props.name}</div>
    </div>
  );
}

export default Card;
