import React from 'react';

function Card(props) {
  return (
    <div id='Card'>
      <img
        id={props.id}
        className='cardImage'
        src={props.imageURL}
        alt={props.foodName}
        onClick={(e) => props.onClickFunction(e.target)}
      ></img>
      <div className='cardName'>{props.foodName}</div>
    </div>
  );
}

export default Card;
