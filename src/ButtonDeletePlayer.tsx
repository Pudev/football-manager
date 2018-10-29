import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

class ButtonDeletePlayer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.deletePlayer = this.deletePlayer.bind(this);
    }

    public deletePlayer = () => {
        this.props.deletePlayer(this.props.id);
    }

    public render() {
        return (
            <form className='needs-validation'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#' + this.props.name + 'delete'}>
                    <FontAwesomeIcon icon={faUserSlash} />
                </button>

                <div>
                    <div className="modal fade" id={this.props.name + 'delete'}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title">Delete a Player: {this.props.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.deletePlayer}>Delete</button>
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

export default ButtonDeletePlayer;