const ScoreBoard = (props) => {
  return (
    <div id='ScoreBoard'>
      <div>
        Current Score: {props.currentScore}. High Score: {props.highScore}.
      </div>
    </div>
  );
};
export default ScoreBoard;
