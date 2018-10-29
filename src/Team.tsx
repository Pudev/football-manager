import ButtonAddEditPlayer from './ButtonAddEditPlayer';
// import { PlayerStatus } from './constants';
import { IPlayer } from './interfaces';
import Player from './Player';

import * as React from 'react';
import { v4 } from 'uuid';


class Team extends React.Component<{ teamName: string }, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            players: []
        };

        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
    }

    public addPlayer = (player: IPlayer) => {
        player.id = v4();

        const newList = [...this.state.players, player];
        this.setState({
            players: newList
        });
    }

    public editPlayer = (player: IPlayer) => {
        const newList = this.state.players.map((x: IPlayer) => {
            if (x.id === player.id) {
                x.name = player.name;
                x.phone = player.phone;

                return x;
            }
            return x;
        });
        this.setState({ players: newList });
    }

    public listPlayers = (team: IPlayer[]) => team.map((player) =>
        <Player key={player.id} id={player.id} name={player.name} phone={player.phone} status={player.status} editPlayer={this.editPlayer} />
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