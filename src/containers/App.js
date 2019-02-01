import { connect } from 'react-redux';
import { default as AppComponent } from '../components/App';
import {
  pickGesture,
  playAgain,
  resetScoreboard,
} from '../actions/app';

const mapStateToProps = (state, ownProps) => {
  const {
    computerGesture,
    draws,
    gameState,
    losses,
    playerGesture,
    wins,
  } = state.app

  return {
    computerGesture,
    draws,
    gameState,
    losses,
    playerGesture,
    wins,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPickGestureClick: playerGesture => event => {
      dispatch(pickGesture(playerGesture));
    },
    onPlayAgainClick: event => {
      dispatch(playAgain());
    },
    onResetScoreboardClick: event => {
      dispatch(resetScoreboard());
    },
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default App;
