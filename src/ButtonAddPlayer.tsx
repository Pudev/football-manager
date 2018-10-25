import * as React from 'react';

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonAddEditPlayer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            status: 0
        }
        this.addPlayer = this.addPlayer.bind(this);
    }

    public changeName = (event: any) => {
        this.setState({ name: event.currentTarget.value })
    }

    public changePhone = (event: any) => {
        this.setState({ phone: event.currentTarget.value })
    }

    public addPlayer = () => {
        this.props.teamName === 'Team1' ? this.props.updateFirstTeam(this.state) : this.props.updateSecondTeam(this.state);

        this.setState({ name: '', phone: '' });
    }

    public render() {
        return (
            <form className='needs-validation'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#' + this.props.teamName}>
                    <FontAwesomeIcon icon={faUserPlus}/>
                </button>

                <div>
                    <div className="modal fade" id={this.props.teamName}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Add a Player to {this.props.teamName}</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="usr">Name:</label>
                                        <input type="text" className="form-control" id="usr" required={true}
                                            value={this.state.name}
                                            onChange={this.changeName} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="text" className="form-control" id="phone" required={true}
                                            value={this.state.phone}
                                            onChange={this.changePhone} />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" typeof="submit" onClick={this.addPlayer}>Add</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ButtonAddEditPlayer;