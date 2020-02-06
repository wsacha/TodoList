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
  onAdd = (task) => {
    let newTask = { id: Math.random(), description: task };
    let updatedTaskList = [...this.state.tasks, newTask];
    this.setState({
      tasks: updatedTaskList,
    })
  };
  onDelete = (id) => {
    let newState = this.state.tasks.filter((elem) => {
      return (elem.id !== id);
    });
    this.setState({ tasks: newState, });
  };
  render() {
    return (
      <div className="container center-align">
        <h1>Todo List</h1>
        <AddTask addTask={this.onAdd} />
        <DisplayTasks ourTasks={this.state.tasks} deleteTask={this.onDelete} />
      </div>
    )
  }
}

export default App
