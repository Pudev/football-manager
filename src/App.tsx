import * as React from 'react';
import './App.css';
import ButtonAddPlayer from './ButtonAddPlayer';
import { PlayerStatus } from './constants';
import { IPlayer } from './interfaces';
import Team from './Team';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { firstTeamPlayers, secondTeamPlayers };
        this.updateFirstTeam = this.updateFirstTeam.bind(this);
    }

    public updateFirstTeam = (player: IPlayer) => {
        const newList = [...this.state.firstTeamPlayers, player];
        this.setState({
            firstTeamPlayers: newList
        });
    }

    public updateSecondTeam = (player: any) => {
        const newList = [...this.state.secondTeamPlayers, player];
        this.setState({
            secondTeamPlayers: newList
        });
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Football manager</h1>
                </header>
                <div className="row">
                    <div className="col-sm-6">
                        <Team teamName={"Team1"} players={this.state.firstTeamPlayers} />
                        <ButtonAddPlayer teamName={'Team1'} updateFirstTeam={this.updateFirstTeam} />
                    </div>
                    <div className="col-sm-6">
                        <Team teamName={"Team2"} players={this.state.secondTeamPlayers} />
                        <ButtonAddPlayer teamName={'Team2'} updateSecondTeam={this.updateSecondTeam} />
                    </div>
                </div>
            </div>
        );
    }
}

const firstTeamPlayers = [
    { name: 'Georgi Petrov', phone: '099944949', status: PlayerStatus.Invited },
    { name: 'Alexander Dimov', phone: '09923944949', status: PlayerStatus.Uninvited },
    { name: 'Zlatan Ivanov', phone: '32423444', status: PlayerStatus.Uninvited }
];

const secondTeamPlayers = [
    { name: 'Angel Argirov', phone: '089237492', status: PlayerStatus.WillNotPlay },
    { name: 'Petar Angelov', phone: '0933234111', status: PlayerStatus.WillPlay },
    { name: 'Dimitar Pudev', phone: '092348239', status: PlayerStatus.WillPlay }
];

export default App;
