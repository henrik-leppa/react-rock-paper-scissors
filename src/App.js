import React, { Component } from 'react';
import './App.css';

const gameStates = Object.freeze({
  draw: 'draw',
  lose: 'lose',
  win: 'win',
});

const gestures = Object.freeze({
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
});

class App extends Component {

  state = {
    computerGesture: null,
    draws: 0,
    gameState: null,
    losses: 0,
    playerGesture: null,
    wins: 0,
  };

  gestureOnclick = (playerGesture) => () => {
    const randomInteger = Math.floor(Math.random() * Math.floor(3));
    const computerGesture = Object.keys(gestures)[randomInteger];

    this.setState((state, props) => {
      let { draws, losses, wins } = state;
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
        computerGesture,
        draws,
        gameState,
        losses,
        playerGesture,
        wins,
      };
    });

  };

  playAgainOnclick = () => {
    this.setState({
      gameState: null,
    });
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>
            React Rock–paper–scissors
          </h1>
        </header>
        <table className="scoreboard-table">
          <caption>
            Scoreboard:
          </caption>
          <tbody>
            <tr>
              <th scope="row">
                Draws:
              </th>
              <td>
                {this.state.draws}
              </td>
            </tr>
            <tr>
              <th scope="row">
                Losses:
              </th>
              <td>
                {this.state.losses}
              </td>
            </tr>
            <tr>
              <th scope="row">
                Wins:
              </th>
              <td>
                {this.state.wins}
              </td>
            </tr>
          </tbody>
        </table>
        {(typeof this.state.gameState === 'string' && (
          <>
            <p>
              You picked: {this.state.playerGesture}
            </p>
            <p>
              The computer picked: {this.state.computerGesture}
            </p>
            <p>
              {(this.state.gameState === gameStates.draw && (
                <>
                  Draw!
                </>
              )) || (this.state.gameState === gameStates.lose && (
                <>
                  You lost!
                </>
              )) || (this.state.gameState === gameStates.win && (
                <>
                  You won!
                </>
              ))}
            </p>
            <p>
              <button type="button" onClick={this.playAgainOnclick}>
                Play again
              </button>
            </p>
          </>
        )) || (
          <>
            <p>
              Pick a gesture:
            </p>
            <p>
              <button type="button" onClick={this.gestureOnclick('rock')}>
                Rock
              </button>
              <button type="button" onClick={this.gestureOnclick('paper')}>
                Paper
              </button>
              <button type="button" onClick={this.gestureOnclick('scissors')}>
                Scissors
              </button>
            </p>
          </>
        )}
      </div>
    );
  }
}

export default App;
