import React from 'react';

function Card(props) {
  return (
    <div
      className='Card'
      onClick={() => props.handleClick(props.name)}
    >
      <img
        src={props.image}
        alt={props.name}
        width='100'
        height='100'
      ></img>
      <div>{props.name}</div>
    </div>
  );
}

export default Card;
