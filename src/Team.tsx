import * as React from 'react';
import ButtonAddEditPlayer from './ButtonAddPlayer';
import { PlayerStatus } from './constants';
import { IPlayer } from './interfaces';
import Player from './Player';

class Team extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { firstTeamPlayers, secondTeamPlayers };
        this.updateFirstTeam = this.updateFirstTeam.bind(this);
        this.updateSecondTeam = this.updateSecondTeam.bind(this);
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
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                <div className="row">
                    <h3 className="col-8">{this.props.teamName}</h3>
                    <div className="col-4">
                        {
                            this.props.teamName === 'Team1' ?
                                <ButtonAddEditPlayer teamName={'Team1'} updateFirstTeam={this.updateFirstTeam} /> :
                                <ButtonAddEditPlayer teamName={'Team2'} updateSecondTeam={this.updateSecondTeam} />
                        }
                    </div>
                </div>
                <div className="col-12">
                    {this.props.teamName === 'Team1' ? listPlayers(this.state.firstTeamPlayers) : listPlayers(this.state.secondTeamPlayers)}
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

const listPlayers = (team: IPlayer[]) => team.map((x, index) =>
    <Player key={index} name={x.name} phone={x.phone} status={x.status} />
);

export default Team;