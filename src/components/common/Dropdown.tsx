import * as React from 'react';
import { PlayerStatus } from './../../constants';

class Dropdown extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: this.props.status
        }
    }

    public click = (event: any) => {
        this.setState({
            value: PlayerStatus[event.currentTarget.text]
        })
    }

    public render() {
        return (
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
                    {PlayerStatus[this.state.value] !== 'undefined' ? PlayerStatus[this.state.value] : "Select..."}
                </button>

                <div className="dropdown-menu" >
                    <a className="dropdown-item" onClick={this.click}>Uninvited</a>
                    <a className="dropdown-item" onClick={this.click}>Invited</a>
                    <a className="dropdown-item" onClick={this.click}>WillNotPlay</a>
                    <a className="dropdown-item" onClick={this.click}>WillPlay</a>
                </div>
            </div >
        );
    }
}
export default Dropdown;