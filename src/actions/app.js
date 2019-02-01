import * as types from '../actionTypes';

export const pickGesture = playerGesture => {
  return {
    type: types.PICK_GESTURE,
    playerGesture,
  };
};

export const playAgain = props => {
  return {
    type: types.PLAY_AGAIN,
  };
};

export const resetScoreboard = props => {
  return {
    type: types.RESET_SCOREBOARD,
  };
};
