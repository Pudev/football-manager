import ButtonAddEditPlayer from '../common/ButtonAddEditPlayer';
import ButtonDeletePlayer from '../common/ButtonDeletePlayer';
import Dropdown from '../common/Dropdown';

import './Player.css'

import { IPlayer } from '../../interfaces';

import * as React from 'react';

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
                    <span className="col-12 font-bold">{this.props.name} {this.props.phone ? `/ ${this.props.phone}`: ""}</span>
                </div>

                <div className="row">
                    <div className="col-3">
                        <ButtonAddEditPlayer
                            editPlayer={this.editPlayer}
                            {...this.props} />
                    </div>
                    <div className="col-3">
                        <ButtonDeletePlayer name={this.props.name} id={this.props.id} deletePlayer={this.deletePlayer} />
                    </div>
                    <div className="col-6">
                        <Dropdown
                            editPlayer={this.editPlayer}
                           {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;