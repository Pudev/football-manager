import * as React from 'react';

import Dropdown from './Dropdown';

import { faUserEdit, faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IPlayer } from './interfaces';

class Player extends React.Component<IPlayer, any> {
    constructor(props: IPlayer) {
        super(props);
    }

    public render() {
        return (
            <div className="alert alert-primary">
                <div className="row">
                    <span style={{ fontWeight: "bold" }} className="col-12">{this.props.name} / {this.props.phone}</span>
                </div>

                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-primary"><FontAwesomeIcon icon={faUserEdit} /></button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-primary"><FontAwesomeIcon icon={faUserSlash} /></button>
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