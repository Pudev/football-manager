import './App.css';

import * as React from 'react';
import * as constants from '../../constants';
import Team from '../team/Team';


class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Football manager</h1>
                </header>
                <div className="row">
                    <div className="col-sm-6" style={{ marginBottom: '20px', marginTop: '10px', paddingBottom: '10px', borderBottom: 'solid 1px grey' }}>
                        <Team teamName={constants.HOME_TEAM} />
                    </div>
                    <div className="col-sm-6">
                        <Team teamName={constants.AWAY_TEAM} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;