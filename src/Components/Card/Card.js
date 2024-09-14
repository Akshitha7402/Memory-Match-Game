import React from 'react';
import { Card as MuiCard, CardContent } from '@mui/material';

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <MuiCard onClick={onClick} variant="outlined">
      <CardContent>
        {isFlipped ? card.content : '❓'}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
