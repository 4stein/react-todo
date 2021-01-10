import React from 'react';

class ToDoListFooter extends React.Component {

    handlerFilterChanged(e) {
        this.props.changeFilterCallback(e.target.dataset.value)
    }

    render() {
        let { tasks, filter, clearCompletedCallback } = this.props;
        return (
            <div className='todolistfooter'>
                <div>
                    <span>{tasks.filter(t => !t.isDone).length} items left</span>
                </div>
                <div className='buttons'>
                    <button
                        className={filter === 'all' ? 'selected' : ''}
                        onClick={this.handlerFilterChanged.bind(this)}
                        data-value="all">All
                    </button>
                    <button
                        className={filter === 'active' ? 'selected' : ''}
                        onClick={this.handlerFilterChanged.bind(this)}
                        data-value="active">Active
                    </button>
                    <button
                        className={filter === 'completed' ? 'selected' : ''}
                        onClick={this.handlerFilterChanged.bind(this)}
                        data-value="completed">Completed
                    </button>
                </div>
                <span onClick={clearCompletedCallback.bind(this)}>Clear completed</span>
            </div>
        );
    }
}

export default ToDoListFooter;
