import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode} from './action';

export function Note(props) {
    const note = props.note;
    const dispatch = useDispatch();

    const [number, setNumber] = useState(note.number);

    const onEdit = () => {
        dispatch(enterEditMode(note));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(note));
    }

    if (note.isEditing) {
        return (
        <div className="note">  
            <div className="left">   
                <input type="text" />
                <button>save</button>  
                <button onClick={onCancel}>cancel</button>
             </div>

             <div className="right">
                <textarea />
             </div>
        </div>
        );
    } else {

    return (
        <div className="note">  
            <div className="left">          
                <span className="number">{note.number}</span>
                <button onClick={onEdit}>edit note</button>
            </div>

            <div className="right">
                {note.message}
            </div>
        </div>
    );
    }
}