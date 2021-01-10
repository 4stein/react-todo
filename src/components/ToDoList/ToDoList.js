import React from 'react';
// import {} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import ToDoListFooter from "./ToDoListFooter";
import ToDoListTaskCreator from "./ToDoListTaskCreator";
import TasksList from "./TasksList";
import {getTask} from "./services";

class ToDoList extends React.Component {

    constructor() {
        super();

        this.state = {
            tasks: [],
            filter: 'all'
        }

        getTask(53236)
            .then(data => {
                let serverTasks = data.map(serverItem => {
                    return {
                        id: serverItem.id,
                        title: serverItem.title,
                        isDone: serverItem.done
                    };
                });

                this.setState({
                    tasks: serverTasks
                })
            });

    }

    createNewTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    deleteTask(task) {
        this.setState({
            tasks: this.state.tasks.filter(t => t !== task)
        })
    }

    toggleTaskStatus(task) {
        task.isDone = !task.isDone;
        this.forceUpdate();
    }

    changeTaskFilter(set) {
        this.setState({filter: set})
    }

    clearCompleted() {
        this.setState({
            tasks: this.state.tasks.filter(t => !t.isDone)
        })
    }

    render() {

        let {tasks, filter} = this.state;
        let filteredTasks = [];

        if (filter === 'all') filteredTasks = tasks;
        if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone);
        if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone);


        return (
            <div className="todolist">
                <ToDoListTaskCreator
                    onCreate={this.createNewTask.bind(this)}
                />
                <TasksList
                    tasks={filteredTasks}
                    deleteCallback={this.deleteTask.bind(this)}
                    toggleCallback={this.toggleTaskStatus.bind(this)}
                />
                <ToDoListFooter
                    tasks={this.state.tasks}
                    filter={this.state.filter}
                    changeFilterCallback={this.changeTaskFilter.bind(this)}
                    clearCompletedCallback={this.clearCompleted.bind(this)}
                />
            </div>
        );
    }
}

export default ToDoList;
