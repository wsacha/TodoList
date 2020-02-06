import React, { Component } from 'react';


export class AddTask extends Component {
    state = {
        text: "",
    };

    onInputChange = (e) => {
        this.setState({ text: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length !== 0) {
            this.props.addTask(this.state.text);
            this.setState({ text: "" });
        }
        else {
            alert("Enter task first!");
        }
    }
    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="valign-wrapper col s12">
                    <div className="input-field col s8">
                        <input onChange={this.onInputChange} placeholder="Input task" id="taskInput" type="text" value={this.state.text} className="validate" />
                    </div>
                    <div className=" col s4">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};

export default AddTask;