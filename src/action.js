export const Action = Object.freeze({
    LoadNotes: 'LoadNotes',
});

export function loadNotes(notes) {
    return {
        type: Action.LoadNotes,
        payload: notes,
    };
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

//url for the web service
const host='https://project2.brock347.me:3000/';

export function loadDay(number) {
    return dispatch => {
    fetch(`${host}/notes/${number}`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                dispatch(loadNotes(data.notes));
            }
        })
        .catch(e => console.error(e));
    }
}