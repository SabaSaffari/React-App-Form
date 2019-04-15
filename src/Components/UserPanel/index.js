import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserPanel extends Component {
    constructor(props){
        super(props);
         this.state = {
             name: "",
             type: "user",
             description:""
         }
    }

    changeFeildValue(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <lable>Name:</lable>
                    <input type="text" name="name" className="form-control" value ={this.state.name} onChange={this.changeFeildValue.bind(this)}/>
                </div>
                <div className="form-group">
                    <lable>Type:</lable>
                    <select className="form-control" name="type" value={this.state.type} onChange={this.changeFeildValue.bind(this)}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>   
                </div>
                <div className="form-group">
                    <lable>Description:</lable>
                    <textarea className="form-control" name="description" value={this.state.description} onChange={this.changeFeildValue.bind(this)}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger">Send</button>
                </div>
            </form>
        );
    }
}

export default UserPanel;
