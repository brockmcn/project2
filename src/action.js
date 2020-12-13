export const Action = Object.freeze({
    LoadNotes: 'LoadNotes',
    FinishAddingNote: 'FinishAddingNote',
    EnterEditMode: 'EnterEditMode',
    LeaveEditMode: 'LeaveEditMode',
    FinishSavingNote: 'FinishSavingNote',
    FinishDeletingNote: 'FinishDeletingNote',
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

export function finishSavingNote(note) {
    return {
        type: Action.FinishSavingNote,
        payload: note,
    };
}

export function finishDeletingNote(note) {
    return {
        type: Action.FinishDeletingNote,
        payload: note,
    };
}

export function enterEditMode(note) {
    return {
        type: Action.EnterEditMode,
        payload: note,
    };
}

export function leaveEditMode(note) {
    return {
        type: Action.LeaveEditMode,
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
const host='https://project2.brock347.me:8442';

export function loadNumber(id) {
    return dispatch => {
    fetch(`${host}/notes`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                dispatch(loadNotes(data.note));
            }
        })
        .catch(e => console.error(e));
    }
}


export function startAddingNote(id) {
    const note = {id, message: ""};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    }

    return dispatch => {
    fetch(`${host}/notes`, options)
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


export function startSavingNote(note) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    }

    return dispatch => {
    fetch(`${host}/notes/${note.id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                dispatch(finishSavingNote(note));
            }
        })
        .catch(e => console.error(e));
    }
}

export function startDeletingNote(note) {
    const options = {
        method: 'DELETE',
    };

    return dispatch => {
    fetch(`${host}/notes/${note.id}`, options)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                dispatch(finishDeletingNote(note));
            }
        })
        .catch(e => console.error(e));
    }
}