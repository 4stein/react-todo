import React from 'react';

class Task extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         editMode: false,
    //         title: props.task.title
    //     }
    // }
    //
    // toggleTaskStatus(e) {
    //     let task = {
    //         ...this.props.task
    //     }
    //     task.isDone = !task.isDone;
    //     updateTask(53236, task.id,null, task.isDone)
    //         .then(data => {
    //             this.state({
    //                 editMode: false
    //             });
    //             this.props.toggleCallback(task);
    //         });
    // }
    //
    // saveTitle(e) {
    //
    //     const newTitle = e.target.value;
    //
    //     let task = {
    //         ...this.props.task
    //     }
    //     task.title = newTitle;
    //     updateTask(53236, task.id, newTitle, null)
    //         .then(data => {
    //             this.props.toggleCallback(task);
    //         });
    // }
    //
    // saveTitle() {
    //     this.setState({
    //         editMode: true
    //     });
    // }

    render() {

        return (
            <div className={this.props.task.isDone ?
                'todolist__tasks__task done' :
                'todolist__tasks__task'}>
                <input type="checkbox"
                       checked={this.props.task.isDone}
                       onClick={this.props.toggleCallback.bind(this, this.props.task)}
                />
                {this.props.task.title}
                <span
                    className="delete"
                    onClick={this.props.deleteCallback.bind(this, this.props.task)}
                >✖
                </span>
            </div>
        );
    }
}


export default Task;
