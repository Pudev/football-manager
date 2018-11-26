import * as React from 'react';
import { IPlayer } from 'src/interfaces';
import Team from '../team/Team';
import * as constants from 'src/constants';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);    
    }

    render() {
        return (
            <div>
                <div className="col-sm-6 team-separaton">
                    <Team
                        teamName={constants.HOME_TEAM}
                        players={
                            this.props.playerStatusFilter !== null ?
                                this.props.players.filter((x: IPlayer) => x.team === constants.PlayerTeam.Home && x.status === this.props.playerStatusFilter) :
                                this.props.players.filter((x: IPlayer) => x.team === constants.PlayerTeam.Home)
                        }
                        addPlayer={this.props.addPlayer}
                        editPlayer={this.props.editPlayer}
                        deletePlayer={this.props.deletePlayer} />
                </div>
                <div className="col-sm-6">
                    <Team
                        teamName={constants.AWAY_TEAM}
                        players={
                            this.props.playerStatusFilter !== null ?
                                this.props.players.filter((x: IPlayer) => x.team === constants.PlayerTeam.Away && x.status === this.props.playerStatusFilter) :
                                this.props.players.filter((x: IPlayer) => x.team === constants.PlayerTeam.Away)
                        }
                        addPlayer={this.props.addPlayer}
                        editPlayer={this.props.editPlayer}
                        deletePlayer={this.props.deletePlayer} />
                </div>
            </div>
        );
    }
}

export default Home;