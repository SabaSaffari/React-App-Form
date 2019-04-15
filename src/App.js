import React, { Component } from 'react';
import UserPanel from './Components/UserPanel';
// import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>My App</h1>
                <hr/>
                <UserPanel />
            </div>
        );
    }
}

export default App;
