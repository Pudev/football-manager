import * as React from 'react';
import { IPlayer } from 'src/interfaces';
import Team from '../team/Team';
import * as constants from 'src/constants';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        var homeTeamPlayingTotal = this.props.players.filter((x: IPlayer) => x.team === constants.PlayerTeam.Home && x.status === constants.PlayerStatus.WillPlay);
        var awayTeamPlayingTotal = this.props.players.filter((x: IPlayer) => x.team === constants.PlayerTeam.Away && x.status === constants.PlayerStatus.WillPlay);

        this.state = { homeTeamPlayingTotal, awayTeamPlayingTotal };
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
                    <div className="col-12">Number of players that will play: <span className="font-bold">{this.state.homeTeamPlayingTotal.length}</span></div>
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
                    <div className="col-12">Number of players that will play: <span className="font-bold">{this.state.awayTeamPlayingTotal.length}</span></div>
                </div>
            </div>
        );
    }
}

export default Home;