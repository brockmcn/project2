export const Action = Object.freeze({
    LoadNotes: 'LoadNotes',
    finishAddingNote: 'FinishAddingNote',
    EnterEditMode: 'EnterEditMode',
    LeaveEditMode: 'LeaveEditMode',
});

export function loadNotes(notes) {
    return {
        type: Action.LoadNotes,
        payload: notes,
    };
}

export function finishAddingNote(note) {
    return {
        type: Action.FinishAddingNote,
        payload: note,
    };
}

export function enterEditMode(note) {
    return {
        type: Action.enterEditMode,
        payload: note,
    };
}

export function leaveEditMode(note) {
    return {
        type: Action.leaveEditMode,
        payload: note,
    };
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

//url for the web service
const host='https://project2.brock347.me:3000';

export function loadNumber(number) {
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


export function startAddingNote(number) {
    const note = {number, message: ""};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    }


    return dispatch => {
    fetch(`${host}/notes/${number}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                note.id = data.id;
                dispatch(finishAddingNote(note));
            }
        })
        .catch(e => console.error(e));
    }
}