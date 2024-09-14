import React, { useEffect, useState } from 'react';
import Gameboard from '../GameBoard/GameBoard';
import Scoreboard from '../ScoreBoard/ScoreBoard';
import { useDispatch, useSelector } from 'react-redux';
import { flipCard, resetGame } from '../../Redux/actions';

const Game = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    dispatch(resetGame());
  }, [dispatch]);

  const handleCardClick = (id) => {
    if (flippedCard === null) {
      setFlippedCard(id);
      dispatch(flipCard(id));
    } else {
      dispatch(flipCard(id));
      // Check for match logic
      const card1 = cards.find(card => card.id === flippedCard);
      const card2 = cards.find(card => card.id === id);
      if (card1.value === card2.value) {
        // Match found
        setFlippedCard(null);
      } else {
        // No match
        setTimeout(() => {
          dispatch(flipCard(flippedCard));
          dispatch(flipCard(id));
          setFlippedCard(null);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <Scoreboard />
      <Gameboard cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default Game;
