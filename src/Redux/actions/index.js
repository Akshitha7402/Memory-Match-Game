export const FLIP_CARD = 'FLIP_CARD';
export const RESET_GAME = 'RESET_GAME';

export const flipCard = (id) => ({
  type: FLIP_CARD,
  payload: id
});

export const resetGame = () => ({
  type: RESET_GAME
});
