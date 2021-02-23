import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
    constructor(props) {
        super(props); // in js classes, you need to always call super when deining the constructor of a subclass

        // this is how you let "this" know what to refer to & refer to the right thing
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { // state is how you create variables in react & when you update the state, it will automatically update page with new values
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: [] // this is here b/c on our page, there will be a dropdown menu of all the users in the database
        }
    }

   
    componentDidMount() { 
        axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
            .then(response => {
               this.setState({
                   username: response.data.username,
                   description: response.data.description,
                   duration: response.data.duration,
                   date: new Date(response.data.date) // converting into a date
               })
            })
            .catch(function (error) {
                console.log(error);
            })
        

    axios.get('http://localhost:5000/users/')
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                })
            }
        })
    }


    // when the username is being changed, we're going to set the state (updating username)
    onChangeUsername(e) {
        this.setState({
            username: e.target.value // target is the textbox, value is the value of the textbox. Value will set the value of username to whatever value was in the textbox
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault(); // prevent the default html form submission behavior from taking place

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        // sending user data to the backend
        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id, exercise)
        .then(res => console.log(res.data));

        // after exercise has been submitted, we will take the person back to homepage(list of exercises)
        window.location = '/';
    }


    render() {
        return (
            <div>
              <h3>Edit Exercise Log</h3>
              <form onSubmit = {this.onSubmit}>
                  <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                            }) 
                        }
                    ></select>
                  </div>

                  <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                    />
                  </div>

                  <div className="form-group">
                      <label>Duration (in minutes): </label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                  </div>


                  <div className="form-group">
                      <label>Date: </label>
                      <div>
                          <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                      </div>
                  </div>

                  <div className="form-group">
                      <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                  </div>
              </form>
            </div>
        )
    }
}