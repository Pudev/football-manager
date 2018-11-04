import ButtonAddEditPlayer from '../common/ButtonAddEditPlayer';
import Player from '../player/Player';

import * as constants from '../../constants'
import { IPlayer } from '../../interfaces';

import * as React from 'react';
import { v4 } from 'uuid';



class Team extends React.Component<{ teamName: string }, any> {
    constructor(props: any) {
        super(props);

        let key: any = {};
        let localStoragePlayers: string[] = [];

        this.props.teamName === constants.HOME_TEAM ?
            key = localStorage.getItem(constants.HOME_PLAYERS) :
            key = localStorage.getItem(constants.AWAY_PLAYERS);


        key ? localStoragePlayers = JSON.parse(key) : localStoragePlayers = [];
        localStoragePlayers ? this.state = { players: localStoragePlayers } : this.state = { players: [] };

        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
        this.deletePlayer = this.deletePlayer.bind(this);
    }

    public addPlayer = (player: IPlayer) => {
        player.id = v4();

        const newList = [...this.state.players, player];
        this.setState({
            players: newList
        });

        this.props.teamName === constants.HOME_TEAM ?
        localStorage.setItem(constants.HOME_PLAYERS, JSON.stringify(newList)) :
        localStorage.setItem(constants.AWAY_PLAYERS, JSON.stringify(newList));
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

        this.props.teamName === constants.HOME_TEAM ?
        localStorage.setItem(constants.HOME_PLAYERS, JSON.stringify(newList)) :
        localStorage.setItem(constants.AWAY_PLAYERS, JSON.stringify(newList));
    }

    public deletePlayer = (id: string) => {
        const index = this.state.players.findIndex((x: IPlayer) => x.id === id);
        const newList = [...this.state.players];
        newList.splice(index, 1);

        this.setState({ players: newList });

        this.props.teamName === constants.HOME_TEAM ?
        localStorage.setItem(constants.HOME_PLAYERS, JSON.stringify(newList)) :
        localStorage.setItem(constants.AWAY_PLAYERS, JSON.stringify(newList));    }

    public listPlayers = (team: IPlayer[]) => team.map((player) =>
        <Player
            key={player.id}
            id={player.id}
            name={player.name}
            phone={player.phone}
            status={player.status}
            editPlayer={this.editPlayer}
            deletePlayer={this.deletePlayer} />
    );

    public render() {
        return (
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div className="row">
                    <h3 className="col-8">{this.props.teamName}</h3>
                    <div className="col-4">
                        <ButtonAddEditPlayer name={this.props.teamName} addPlayer={this.addPlayer} />
                    </div>
                </div>
                <div className="col-12">
                    {this.listPlayers(this.state.players)}
                </div>
            </div>
        );
    }
}

export default Team;