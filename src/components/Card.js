import React from 'react';

function Card(props) {
  return (
    <div id='Card'>
      <img
        className='cardImage'
        id={props.foodIndex}
        src={props.imageURL}
        alt={props.foodName}
        data-clicked={props.clickStatus}
        onClick={(e) => props.onClickFunction(e.target)}
      ></img>
      <div className='cardName'>{props.foodName}</div>
    </div>
  );
}

export default Card;
