import * as React from 'react';

import Dropdown from './Dropdown';
import { IPlayerProps } from './interfaces';

class Player extends React.Component<IPlayerProps, any> {
    constructor(props: IPlayerProps) {
        super(props);
    }

    public render() {
        return (
            <div className="alert alert-primary">
                <div>{this.props.name}</div>
                <div>{this.props.phone}</div>
                <div>{this.props.status}</div>
                
                <Dropdown status={this.props.status} />
            </div>
        );
    }
}

export default Player;