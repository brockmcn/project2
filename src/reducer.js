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
            }  
       default: 
        return state;
    }
}

export default reducer;