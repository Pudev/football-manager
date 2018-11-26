import * as React from 'react';
import { PlayerStatus } from 'src/constants';
import logo from 'src/Soccerball.svg';
import { Link } from 'react-router-dom'

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

                <Link className="nav-link" to="/">
                    <img src={logo} width="50" height="50" alt="" />
                </Link>

                <span className="navbar navbar-expand-lg">
                    {PlayerStatus[this.state.value]}
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
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
                                <a className="dropdown-item" onClick={this.click}>{PlayerStatus[0]}</a>
                                <a className="dropdown-item" onClick={this.click}>{PlayerStatus[1]}</a>
                                <a className="dropdown-item" onClick={this.click}>{PlayerStatus[2]}</a>
                                <a className="dropdown-item" onClick={this.click}>{PlayerStatus[3]}</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default NavigationBar;