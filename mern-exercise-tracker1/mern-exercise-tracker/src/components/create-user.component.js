import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props); // in js classes, you need to always call super when deining the constructor of a subclass

        // this is how you let "this" know what to refer to & refer to the right thing
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { // state is how you create variables in react & when you update the state, it will automatically update page with new values
            username: '',
        }
    }

     // when the username is being changed, we're going to set the state (updating username)
     onChangeUsername(e) {
        this.setState({
            username: e.target.value // target is the textbox, value is the value of the textbox. Value will set the value of username to whatever value was in the textbox
        });
    }

    onSubmit(e) {
        e.preventDefault(); // prevent the default html form submission behavior from taking place

        const user = {
            username: this.state.username,
        }

        console.log(user);

        // sending user data to the backend
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }


    
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}