import ButtonAddEditPlayer from './ButtonAddEditPlayer';
import Dropdown from './Dropdown';
import { IPlayer } from './interfaces';

import { faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    public deletePlayer = () => {
        // to do delete a player
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
                        <button className="btn btn-primary" onClick={this.deletePlayer}><FontAwesomeIcon icon={faUserSlash} /></button>
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