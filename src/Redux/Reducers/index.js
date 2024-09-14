import { FLIP_CARD, RESET_GAME } from '../actions';

const generateInitialCards = () => {
  const values = [...Array(8).keys()];
  const cards = [...values, ...values].map((value, id) => ({
    id,
    value,
    flipped: false
  }));
  return shuffle(cards);
};

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const initialState = {
  cards: generateInitialCards(),
  score: 0
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIP_CARD:
      const flippedCard = state.cards.find(card => card.id === action.payload);
      if (!flippedCard.flipped) {
        const updatedCards = state.cards.map(card =>
          card.id === action.payload ? { ...card, flipped: !card.flipped } : card
        );
        return {
          ...state,
          cards: updatedCards
        };
      }
      return state;
    case RESET_GAME:
      return { ...state, cards: generateInitialCards(), score: 0 };
    default:
      return state;
  }
};

export default cardReducer;
