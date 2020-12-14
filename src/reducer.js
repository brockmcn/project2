import { Action } from "./action";

const initialState = {
    isWaiting: false,
    notes: [],
};

function reducer(state = initialState, action) {
     switch (action.type) {
        case Action.LoadNotes:
            return {
                ...state,
                notes: action.payload,
            };
        case Action.FinishAddingNote:
            return {
                ...state,
                notes: [{...action.payload}, ...state.notes],
            };    
        case Action.EnterEditMode:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.payload.id) {
                        return {...note, isEditing: true};
                    } else {
                        return note;
                    }
                }),
            };

        case Action.LeaveEditMode:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.payload.id) {
                          return {...note, isEditing: undefined};
                    } else {
                        return note;
                    }
                }),
            };

        case Action.FinishSavingNote:
        return {
            ...state,
            notes: state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                } else {
                    return note;
                }
            }),
        };


        case Action.FinishDeletingNote:
        return {
            ...state,
            notes: state.notes.filter(note => note.id !== action.payload.id),
        };
       default: 
        return state;
    }
}

export default reducer;