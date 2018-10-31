import { faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

class ButtonAddEditPlayer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: '',
            name: '',
            phone: '',
            status: 0
        }

        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
    }

    public changeName = (event: any) => {
        this.setState({ name: event.currentTarget.value });
    }

    public changePhone = (event: any) => {
        this.setState({ phone: event.currentTarget.value });
    }

    public addPlayer = () => {
        this.props.addPlayer(this.state);
        this.setState({ name: '', phone: '' });
    }

    public editPlayer = () => {
        this.props.editPlayer(this.state);
    }

    public discardChanges = () => {
        const originalValues = this.props;
        this.setState({ name: originalValues.name, phone: originalValues.phone });
    }

    public componentDidMount() {
        const player = {
            id: this.props.id,
            name: this.props.name,
            phone: this.props.phone,
            status: this.props.status
        }

        if (this.props.id) {
            this.setState({
                ...player
            })
        }
    }

    public render() {
        return (
            <form className='needs-validation'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={
                    this.props.id ? '#' + this.props.name.replace(/\s/g, '') : '#' + this.props.name
                }>
                    <FontAwesomeIcon icon={this.props.id ? faUserEdit : faUserPlus} />
                </button>

                <div>
                    <div className="modal fade" id={
                        this.props.id ? this.props.name.replace(/\s/g, '') : this.props.name
                    }>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-header">
                                    {
                                        this.props.id ?
                                            <h5 className="modal-title">Edit a Player: {this.props.name}</h5> :
                                            <h5 className="modal-title">Add a Player to team: {this.props.name}</h5>
                                    }
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
                                    {
                                        this.props.id ?
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal" typeof="submit" onClick={this.editPlayer}>Save</button> :
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal" typeof="submit" onClick={this.addPlayer}>Add</button>
                                    }
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.discardChanges}>Close</button>
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