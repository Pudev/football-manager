import * as React from 'react';
import { IPlayer } from './interfaces';
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
                    {listPlayers(this.props.players)}
                </div>
            </div>
        );
    }
}



const listPlayers = (team: IPlayer[]) => team.map((x, index) => 
    <Player key={index} name={x.name} phone={x.phone} status={x.status} />
);

export default Team;