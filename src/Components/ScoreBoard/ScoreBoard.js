import React from 'react';
import { useSelector } from 'react-redux';

const Scoreboard = () => {
  const { score } = useSelector(state => state);

  return (
    <div>
      <h2>Score: {score}</h2>
    </div>
  );
};

export default Scoreboard;
