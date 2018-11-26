import ButtonAddEditPlayer from '../common/ButtonAddEditPlayer';
import Player from '../player/Player';
import * as constants from '../../constants';
import { IPlayer } from '../../interfaces';
import './Team.css'
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserClock } from '@fortawesome/free-solid-svg-icons';

class Team extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public listPlayers = (players: IPlayer[]) => players.map((player) =>
        <Player
            key={player.id}
            {...player}
            editPlayer={this.props.editPlayer}
            deletePlayer={this.props.deletePlayer} />
    );

    public render() {
        return (
            <div className="margin-left-right-10">
                <div className="row">
                    <h3 className="col-6">{this.props.teamName}</h3>
                    <div className="col-6">
                        {
                            this.props.teamName === constants.HOME_TEAM ?
                                <div className="row">
                                    <ButtonAddEditPlayer
                                        name={this.props.teamName}
                                        team={constants.PlayerTeam.Home}
                                        addPlayer={this.props.addPlayer} />
                                    <div>
                                        <button type="button" className="btn btn-primary">
                                            <FontAwesomeIcon icon={faUserClock} />
                                        </button>
                                    </div>
                                </div> :
                                <div>
                                    <ButtonAddEditPlayer
                                        name={this.props.teamName}
                                        team={constants.PlayerTeam.Away}
                                        addPlayer={this.props.addPlayer} />
                                    <FontAwesomeIcon icon={faUserClock} />
                                </div>
                        }
                    </div>
                </div>
                <div className="col-12">
                    {this.props.players.length > 0 ? this.listPlayers(this.props.players) : ""}
                </div>
            </div>
        );
    }
}

export default Team;