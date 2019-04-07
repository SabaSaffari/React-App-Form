import React, { Component } from 'react';

import UserComponent from './Components/UserComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const userList = [
            {
                name: 'Test 1',
                age: '11',
            },
            {
                name: 'Test 2',
                age: '23',
            },
            {
                name: 'Test 3',
                age: '42',
            },
        ];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>

                    {userList.map((item, index) => (
                        <UserComponent key={index} name={item.name} age={item.age} />
                    ))}

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
