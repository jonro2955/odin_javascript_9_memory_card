import React from 'react';

const MessageBoard = (props) => {
  return (
    <div id='MessageBoard'>
      <div>{props.message}</div>
    </div>
  );
};

export default MessageBoard;
