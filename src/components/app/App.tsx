import './App.css';

import Team from '../team/Team';

import * as constants from '../../constants';

import * as React from 'react';
import { IPlayer } from 'src/interfaces';
import { v4 } from 'uuid';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        let key: any = {};
        let localStoragePlayers: string[] = [];

        key = localStorage.getItem(constants.TEAM_PLAYERS)

        key ? localStoragePlayers = JSON.parse(key) : localStoragePlayers = [];
        localStoragePlayers ? this.state = { players: localStoragePlayers } : this.state = { players: [] };

        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    public addPlayer = (player: IPlayer) => {
        player.id = v4();
        const newList = [...this.state.players, player];

        this.setState({ players: newList });
        localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
    }

    public editPlayer = (player: IPlayer) => {
        const newList = this.state.players.map((x: IPlayer) => {
            if (x.id === player.id) {
                x.name = player.name;
                x.phone = player.phone;
                x.status = player.status;

                return x;
            }
            return x;
        });

        this.setState({ players: newList });
        localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
    }

    public deletePlayer = (id: string) => {
        const index = this.state.players.findIndex((x: IPlayer) => x.id === id);
        const newList = [...this.state.players];
        newList.splice(index, 1);

        this.setState({ players: newList });
        localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
    }

    // public homePlayers = () => this.state.players.filter((x: IPlayer) => x.team === 0);

    // public awayPlayers = () => this.state.players.filter((x: IPlayer) => x.team === 1);

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Football manager</h1>
                </header>
                <div className="row">
                    <div className="col-sm-6" style={{ marginBottom: '20px', marginTop: '10px', paddingBottom: '10px', borderBottom: 'solid 1px grey' }}>
                        <Team
                            teamName={constants.HOME_TEAM}
                            players={this.state.players.filter((x: IPlayer) => x.team === 0)}
                            addPlayer={this.addPlayer}
                            editPlayer={this.editPlayer}
                            deletePlayer={this.deletePlayer} />
                    </div>
                    <div className="col-sm-6">
                        <Team
                            teamName={constants.AWAY_TEAM}
                            players={this.state.players.filter((x: IPlayer) => x.team === 1)}
                            addPlayer={this.addPlayer}
                            editPlayer={this.editPlayer}
                            deletePlayer={this.deletePlayer} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;