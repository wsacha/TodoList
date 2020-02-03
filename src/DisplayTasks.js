import React from 'react'

const DisplayTasks = ({ ourTasks }) => {

    const allTasks = ourTasks.length ? (
        ourTasks.map((task) => {
            return (
                <div className="collection-item" key={task.id}>
                    <p>{task.description}</p>
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
