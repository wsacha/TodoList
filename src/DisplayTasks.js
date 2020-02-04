import React from 'react'

const DisplayTasks = ({ ourTasks, deleteTask }) => {

    const allTasks = ourTasks.length ? (
        ourTasks.map((task) => {
            return (
                <div className="collection-item row valign-wrapper" key={task.id}>
                    <p className="col s10 left-align">{task.description}</p>
                    <button onClick={() =>{deleteTask(task.id)} } type="button" className="btn-floating btn-large waves-effect waves-light red cos s2">
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            )
        })
    ) :
        (
            <p className="center">No tasks at this moment</p>
        );
    return (
        <div className="collection">
            {allTasks}
        </div>
    );
}

export default DisplayTasks;
