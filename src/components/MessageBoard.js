import React from 'react';

const MessageBoard = (props) => {
  return (
    <div id='MessageBoard'>
      <h1>{props.message}</h1>
    </div>
  );
};

export default MessageBoard;
