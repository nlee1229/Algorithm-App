import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExercisesList extends Component {
    // constructor to initialize the state with an empty exercises array
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        // initialize the state
        this.state = { exercises: [] }; // empty array of exercises
    }

    // get list of exercises from the database
    // code will run before the page is rendered and add a list of exercises to the state
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data }); // 
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // delete exercises from the database
    deleteExercise(id) {
        axios.delete('http:localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));

        this.setState({ //array of exercises- filter-return certain elements back to exercises. For every element in the exercises array,we are going to return it if el._id does not = id. Whenever the id of the exercise in the exercises array does  not = the id we are deleting,we'll pass it back to the exercises array. 
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    // method calls exercise list below and will return the things below
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            // Exercise below is a component we created
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* tbody is going to call the exerciseList method above */}
                        {this.exerciseList()} 
                    </tbody>
                </table>
            </div>
        )
    }
}