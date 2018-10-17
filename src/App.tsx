import * as React from 'react';
import './App.css';
import Team from './Team';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Football manager</h1>
                </header>
                <div className="row">
                    <div className="col-sm-6">
                        <Team teamName={"Team1"}/>
                    </div>
                    <div className="col-sm-6">
                        <Team teamName={"Team2"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
