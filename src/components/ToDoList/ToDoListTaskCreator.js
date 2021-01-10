import React from 'react';
import { createTask } from "./services";

class ToDoListTaskCreator extends React.Component {

    createNewTask(e) {
        if (e.key === 'Enter') {

            createTask(e.target.value,53236)
              .then(data => {
                 const newTask = {
                    title: data.task.title,
                    isDone: data.task.done
                };
                this.props.onCreate(newTask);
                e.target.value = '';
            });
        }
    }


    render() {
        return (
            <div className="todolist__header">
                <input
                    type="text"
                    onKeyDown={this.createNewTask.bind(this)}
                />
            </div>
        );
    }
}

export default ToDoListTaskCreator;
