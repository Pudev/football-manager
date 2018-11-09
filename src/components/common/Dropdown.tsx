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

        this.props.editPlayer(Object.assign({}, this.props, { status: PlayerStatus[event.currentTarget.text] }));
    }

    public render() {
        return (
            <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
                    {PlayerStatus[this.state.value] !== 'undefined' ? PlayerStatus[this.state.value] : "Select..."}
                </button>

                <div className="dropdown-menu" >
                    <a className="dropdown-item" onClick={this.click}>{PlayerStatus[0]}</a>
                    <a className="dropdown-item" onClick={this.click}>{PlayerStatus[1]}</a>
                    <a className="dropdown-item" onClick={this.click}>{PlayerStatus[2]}</a>
                    <a className="dropdown-item" onClick={this.click}>{PlayerStatus[3]}</a>
                </div>
            </div >
        );
    }
}
export default Dropdown;