import React from 'react';
import Task from "./Task";

class TasksList extends React.Component {

    render() {
        return (
            <div className="todolist__tasks">
                {this.props.tasks.map(task => {
                    return (
                        <Task
                            task={task}
                            key={task.title}
                            deleteCallback={this.props.deleteCallback.bind(this, task)}
                            toggleCallback={this.props.toggleCallback.bind(this, task)}
                        />
                    )
                })}
            </div>
        );
    }
}

export default TasksList;
