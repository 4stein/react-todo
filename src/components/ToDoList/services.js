export function createTask (title, widgetId) {

    const data = new URLSearchParams();
    data.append('widgetId', widgetId);
    data.append('title', title);

    return fetch('https://repetitora.net/api/JS/Tasks',
        {
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset-UTF-8',
                'accept': 'application/json'
            },
            mode: 'cors'
        })
        .then(result => result.json());
}

// export function updateTask (widgetId, taskId, title = null, isDone = null ) {
//
//     const data = new URLSearchParams();
//     data.append('widgetId', widgetId);
//     if (isDone !== null) data.append('done', isDone);
//     if (title !== null) data.append('title', title);
//
//     return fetch('https://repetitora.net/api/JS/Tasks',
//         {
//             method: 'PUT',
//             body: data,
//             headers: {
//                 'content-type': 'application/x-www-form-urlencoded; charset-UTF-8',
//                 'accept': 'application/json'
//             },
//             mode: 'cors'
//         })
//         .then(result => result.json());
// }

export function getTask (widgetId) {

    return fetch(`https://repetitora.net/api/JS/Tasks?widgetId=${widgetId}&count=5`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset-UTF-8',
                'accept': 'application/json'
            },
            mode: 'cors'
        })
        .then(result => result.json());
}

