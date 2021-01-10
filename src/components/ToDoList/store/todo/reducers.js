// REDUCERS

export function todolistTeduser(state, action) {
    switch (action.type) {
        case 'Put_TASKS':
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: action.id,
                    title: action.title,
                    isDone: action.isDone
                }],
                filter: 'completed'
            }
        default:
            if (!!state) return state;

            return {
                tasks: [],
                filter: 'all'
            }
    }
}

// export function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }