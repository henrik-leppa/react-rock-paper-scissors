import React, { Component } from 'react';
import './App.css';
import { gameStates } from '../constants';

class App extends Component {
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
                {this.props.draws}
              </td>
            </tr>
            <tr>
              <th scope="row">
                Losses:
              </th>
              <td>
                {this.props.losses}
              </td>
            </tr>
            <tr>
              <th scope="row">
                Wins:
              </th>
              <td>
                {this.props.wins}
              </td>
            </tr>
          </tbody>
        </table>
        {(typeof this.props.gameState === 'string' && (
          <>
            <p>
              You picked: {this.props.playerGesture}
            </p>
            <p>
              The computer picked: {this.props.computerGesture}
            </p>
            <p>
              {(this.props.gameState === gameStates.draw && (
                <>
                  Draw!
                </>
              )) || (this.props.gameState === gameStates.lose && (
                <>
                  You lost!
                </>
              )) || (this.props.gameState === gameStates.win && (
                <>
                  You won!
                </>
              ))}
            </p>
            <p>
              <button type="button" onClick={this.props.onPlayAgainClick}>
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
              <button
                type="button"
                onClick={this.props.onPickGestureClick('rock')}
              >
                Rock
              </button>
              <button
                type="button"
                onClick={this.props.onPickGestureClick('paper')}
              >
                Paper
              </button>
              <button
                type="button"
                onClick={this.props.onPickGestureClick('scissors')}
              >
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
