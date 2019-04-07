import React, { Component } from 'react';

class UserComponent extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default UserComponent;
