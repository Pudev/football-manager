import * as React from 'react';
import { PlayerStatus } from 'src/constants';
import logo from 'src/Soccerball.svg';

class NavigationBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: null
        }
    }

    public click = (event: any) => {
        const dropdownValue = event.currentTarget.text;
        if (dropdownValue === 'All') {
            this.setState({ value: null })

            this.props.filterByPlayerStatus(null);
        } else {
            this.setState({ value: PlayerStatus[dropdownValue] })

            this.props.filterByPlayerStatus(PlayerStatus[dropdownValue]);
        }
    }

    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <a className="navbar-brand" href="#">
                    <img src={logo} width="50" height="50" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.props.playerStatusFilter !== null ?
                                    `Show: ${PlayerStatus[this.props.playerStatusFilter]}` :
                                    "Show: All"}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" onClick={this.click}>All</a>
                                <a className="dropdown-item" onClick={this.click}>Uninvited</a>
                                <a className="dropdown-item" onClick={this.click}>Invited</a>
                                <a className="dropdown-item" onClick={this.click}>WillNotPlay</a>
                                <a className="dropdown-item" onClick={this.click}>WillPlay</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default NavigationBar;