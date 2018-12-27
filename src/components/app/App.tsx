import './App.css';
import * as React from 'react';
import Main from '../main/Main';
import NavigationBar from '../navigation-bar/NavigationBar';
import { IPlayer } from 'src/interfaces';
import { v4 } from 'uuid';
import * as constants from 'src/constants';

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

        playerKey ? localStoragePlayers = JSON.parse(playerKey) : localStoragePlayers = [];
        localStoragePlayers ? this.setState({ players: localStoragePlayers }) : this.setState({ players: [] });

        playerFilterStatusKey ? localStoragePlayerFilterByStatus = JSON.parse(playerFilterStatusKey) : localStoragePlayerFilterByStatus = '';
        localStoragePlayerFilterByStatus ? this.setState({ playerStatusFilter: localStoragePlayerFilterByStatus }) : this.setState({ playerStatusFilter: null });
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

    public filterByPlayerStatus = (status: any) => {
        this.setState({ playerStatusFilter: status });

        localStorage.setItem(constants.FILTER_BY_PLAYER_STATUS, JSON.stringify(status));
    }

    public resetPlayersStatus = () => {
        const newList = this.state.players.map((x: IPlayer) => {
            x.status = constants.PlayerStatus.Uninvited;
            return x;
        });

        this.setState({ players: newList });
        localStorage.setItem(constants.TEAM_PLAYERS, JSON.stringify(newList));
    }

    render() {
        return (
            <div className="App">
                <NavigationBar
                    playerStatusFilter={this.state.playerStatusFilter}
                    filterByPlayerStatus={this.filterByPlayerStatus}
                    resetPlayersStatus={this.resetPlayersStatus}
                />
                <Main
                    players={this.state.players}
                    playerStatusFilter={this.state.playerStatusFilter}
                    addPlayer={this.addPlayer}
                    editPlayer={this.editPlayer}
                    deletePlayer={this.deletePlayer}
                />
            </div>
        );
    }
}

export default App;