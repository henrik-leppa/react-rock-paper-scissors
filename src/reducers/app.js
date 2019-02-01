import * as types from '../actionTypes';
import { gameStates, gestures } from '../constants';

const initialState = {
  computerGesture: null,
  draws: 0,
  gameState: null,
  losses: 0,
  playerGesture: null,
  wins: 0,
};

const app = (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.PICK_GESTURE:
      const randomInteger = Math.floor(Math.random() * Math.floor(3));
      const computerGesture = Object.keys(gestures)[randomInteger];

      let { draws, losses, wins } = state;
      const { playerGesture } = action;
      let gameState;
      if (playerGesture === computerGesture) {
        gameState = gameStates.draw;
        draws++;
      }
      else if (
        (playerGesture === gestures.rock && computerGesture === gestures.paper)
        || (
          playerGesture === gestures.paper
            && computerGesture === gestures.scissors
        )
        || (
          playerGesture === gestures.scissors
            && computerGesture === gestures.rock
        )
      ) {
        gameState = gameStates.lose;
        losses++;
      }
      else {
        gameState = gameStates.win;
        wins++;
      }
      return {
        ...state,
        computerGesture,
        draws,
        gameState,
        losses,
        playerGesture,
        wins,
      };
    case types.PLAY_AGAIN:
      return {
        ...state,
        gameState: null,
      };
    case types.RESET_SCOREBOARD:
      return {
        ...state,
        draws: 0,
        losses: 0,
        wins: 0,
      };
    default:
      return state;
  }
};

export default app;
