const ScoreBoard = (props) => {
  return (
    <div id='ScoreBoard'>
      <h1>
        Current Score: {props.currentScore}. High Score: {props.highScore}.
      </h1>
      {/* <h1>High Score: {props.highScore}</h1> */}
    </div>
  );
};
export default ScoreBoard;
