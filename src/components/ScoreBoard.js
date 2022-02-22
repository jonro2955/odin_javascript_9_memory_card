import React, { useState } from 'react';

const ScoreBoard = () => {
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementStreak = () => {
    setStreak(streak + 1);
  };

    const clearStreak = () => {
      setStreak(0);
    };


  const updateHS = () => {
    setHighScore(streak);
  };

  return (
    <div id='ScoreBoard'>
      <h1>Current Streak: {streak}</h1>
      <button onClick={incrementStreak}>Increment Streak</button>
      <button onClick={clearStreak}>Clear Streak</button>
      <h1>High Score: {highScore}</h1>
      <button onClick={updateHS}>Copy Highscore</button>
    </div>
  );
};

export default ScoreBoard;
