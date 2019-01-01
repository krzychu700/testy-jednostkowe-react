import React, { Component } from "react";
import "./App.css";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Kunegunda",
          score: 5
        },
        {
          name: "Antoś",
          score: 0
        }
      ]
    };
  }

  onScoreSort = () => {
    this.setState({
      players: this.state.players.sort((a, b) => {
        return b.score - a.score;
      })
    });
  };

  resetScores = () => {
    this.setState({
      players: this.state.players.map(player => {
        return { ...player, score: 0 };
      })
    });
  };

  onPlayerUpdate = (playerIndex, playerNewName) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, name: playerNewName };
        }
        return player;
      })
    });
  };

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    });
  };

  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };

  onPlayerRemove = playerIndex => {
    this.setState({
      players: this.state.players.filter((player, i) => i !== playerIndex)
    });
  };

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <button onClick={this.onScoreSort}>Sort</button>
        <button className="reset" onClick={this.resetScores}>
          Reset
        </button>
        <PlayersList
          onPlayerUpdate={this.onPlayerUpdate}
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;
