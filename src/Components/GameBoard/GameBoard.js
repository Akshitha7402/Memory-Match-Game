import React from 'react';
import Card from '../Card/Card';

const Gameboard = ({ cards, onCardClick }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '450px' }}>
      {cards.map(card => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default Gameboard;
