/* eslint-disable no-unused-vars */
import './App.css';
import * as React from 'react';
import { v4 } from 'uuid';
import * as constants from 'src/constants';
import { IPlayer } from 'src/interfaces';
import Main from '../main/Main';
import NavigationBar from '../navigation-bar/NavigationBar';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = { playerStatusFilter: 'null', players: [] };

    this.addPlayer = this.addPlayer.bind(this);
    this.editPlayer = this.editPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  public componentDidMount() {
    let playerKey: any = {};
    let playerFilterStatusKey: any = {};
    let localStoragePlayers: string[] = [];
    let localStoragePlayerFilterByStatus: string = '';

    playerKey = localStorage.getItem(constants.TEAM_PLAYERS);
    playerFilterStatusKey = localStorage.getItem(constants.FILTER_BY_PLAYER_STATUS);

    if (playerKey) {
      localStoragePlayers = JSON.parse(playerKey);
    } else {
      localStoragePlayers = [];
    }

    if (localStoragePlayers) {
      this.setState({ players: localStoragePlayers });
    } else {
      this.setState({ players: [] });
    }

    if (playerFilterStatusKey) {
      localStoragePlayerFilterByStatus = JSON.parse(playerFilterStatusKey);
    } else {
      localStoragePlayerFilterByStatus = '';
    }
    if (localStoragePlayerFilterByStatus) {
      this.setState({ playerStatusFilter: localStoragePlayerFilterByStatus });
    } else {
      this.setState({ playerStatusFilter: null });
    }
  }

  public addPlayer = (player: IPlayer) => {
    const { players } = this.state;
    const tempPlayer = player;
    tempPlayer.id = v4();
    const newList = [players, tempPlayer];

    this.setState({ players: newList });
    localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
  }

  public editPlayer = (player: IPlayer) => {
    const { players } = this.state;
    const newList = players.map((x: IPlayer) => {
      const tempX = x;
      if (tempX.id === player.id) {
        tempX.name = player.name;
        tempX.phone = player.phone;
        tempX.status = player.status;

        return tempX;
      }
      return tempX;
    });

    this.setState({ players: newList });
    localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
  }

  public deletePlayer = (id: string) => {
    const { players } = this.state;
    const newList = players.filter((x: IPlayer) => x.id !== id);

    this.setState({ players: newList });
    localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
  }

  public filterByPlayerStatus = (status: any) => {
    this.setState({ playerStatusFilter: status });

    localStorage.setItem(constants.FILTER_BY_PLAYER_STATUS, JSON.stringify(status));
  }

  public resetPlayersStatus = () => {
    const { players } = this.state;

    const newList = players.map((x: IPlayer) => {
      const tempX = x;
      tempX.status = constants.PlayerStatus.Uninvited;
      return tempX;
    });

    this.setState({ players: newList });
    localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
  }

  render() {
    const { playerStatusFilter, players } = this.state;
    return (
      <div className="App">
        <NavigationBar
          playerStatusFilter={playerStatusFilter}
          filterByPlayerStatus={this.filterByPlayerStatus}
          resetPlayersStatus={this.resetPlayersStatus}
        />
        <Main
          players={players}
          playerStatusFilter={playerStatusFilter}
          addPlayer={this.addPlayer}
          editPlayer={this.editPlayer}
          deletePlayer={this.deletePlayer}
        />
      </div>
    );
  }
}

export default App;
