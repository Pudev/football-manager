import * as React from 'react';
import { PlayerStatus } from './constants';
import { IPlayerProps } from './interfaces';
import Player from './Player';

class Team extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div style={{ marginLeft: '20px', marginRight: '20px' }} className="row">
                <h3 className="col-sm-12 border-bottom-outset ">{this.props.teamName}</h3>
                <div className="col-sm-12">
                    {this.props.teamName === 'Team1' ?
                        listPlayers(firstTeamPlayers) :
                        listPlayers(secondTeamPlayers)}
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

const listPlayers = (team: IPlayerProps[]) => team.map((x, index) =>
    <Player key={index} name={x.name} phone={x.phone} status={x.status}/>
)

export default Team;