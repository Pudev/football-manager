import ButtonAddEditPlayer from './ButtonAddEditPlayer';
import Dropdown from './Dropdown';
import { IPlayer } from './interfaces';

import * as React from 'react';
import ButtonDeletePlayer from './ButtonDeletePlayer';

class Player extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.editPlayer.bind(this);
        this.deletePlayer.bind(this);
    }

    public editPlayer = (player: IPlayer) => {
        this.props.editPlayer(player);
    }

    public deletePlayer = (id: string) => {
        this.props.deletePlayer(id);
    }

    public render() {
        return (
            <div className="alert alert-primary">
                <div className="row">
                    <span style={{ fontWeight: "bold" }} className="col-12">{this.props.name} / {this.props.phone}</span>
                </div>

                <div className="row">
                    <div className="col-3">
                        <ButtonAddEditPlayer
                            editPlayer={this.editPlayer}
                            id={this.props.id}
                            name={this.props.name}
                            phone={this.props.phone}
                            status={this.props.status} />
                    </div>
                    <div className="col-3">
                        <ButtonDeletePlayer name={this.props.name} id={this.props.id} deletePlayer={this.deletePlayer}/>
                    </div>
                    <div className="col-6">
                        <Dropdown status={this.props.status} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;