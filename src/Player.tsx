import * as React from 'react';

import Dropdown from './Dropdown';
import { IPlayer } from './interfaces';

class Player extends React.Component<IPlayer, any> {
    constructor(props: IPlayer) {
        super(props);
    }

    public render() {
        return (
            <div className="alert alert-primary">
                <div>{this.props.name}</div>
                <div>{this.props.phone}</div>
                
                <Dropdown status={this.props.status} />
            </div>
        );
    }
}

export default Player;