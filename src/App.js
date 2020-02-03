import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import DisplayTasks from './DisplayTasks';


export class App extends Component {
  state = {
    tasks: [
      { id: 1, description: "Wash dishes" },
      { id: 2, description: "Do laundry" }
    ]
  }
  render() {
    return (
      <div className="container center-align">
        <h1>Todo List</h1>
        <AddTask />
        <DisplayTasks ourTasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
