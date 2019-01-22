import { Switch, Route } from 'react-router-dom';
import * as React from 'react';
import Home from '../home/Home';
import About from '../about/About';

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={() => <Home
                        addPlayer={this.props.addPlayer}
                        editPlayer={this.props.editPlayer}
                        deletePlayer={this.props.deletePlayer}
                        players={this.props.players}
                        playerStatusFilter={this.props.playerStatusFilter} />}
                    />
                    <Route path='/about' component={About} />
                </Switch>
            </main>
        );
    }
}


export default Main;