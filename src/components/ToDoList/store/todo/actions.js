// ACTION
// export const setTasksAction = {
//     type: 'SET_TASKS',
//     id: 2,
//     title: 'Lern js',
//     isDone: false
// }

export const putTaskActionCreator = (tasks) => {
    return{
        type: 'Put_TASKS',
        tasks: tasks
    }
}