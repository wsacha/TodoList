import React, { Component } from 'react';


export class AddTask extends Component {
    state={
        text : "",
    };
    
    
    render() {
        return (
            <div className="row">
                <form className="valign-wrapper col s12">
                    <div className="input-field col s8">
                        <label htmlFor="taskInput">Input task</label>
                        <input id="taskInput" type="text" className="validate" />
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