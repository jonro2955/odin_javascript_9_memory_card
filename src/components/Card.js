import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <img
        className='cardImage'
        id={props.index}
        src={props.image}
        alt={props.name}
        data-clicked={props.clicked}
        onClick={(e) => props.cardClickHandler(e.target)}
      ></img>
      <div className='cardInfo'>{props.name.toUpperCase()}</div>
    </div>
  );
}

export default Card;
