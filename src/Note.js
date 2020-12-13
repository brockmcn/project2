import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode, startSavingNote,
startDeletingNote} from './action';

export function Note(props) {
    const note = props.note;
    const dispatch = useDispatch();

    const [message, setMessage] = useState(note.message);

    const onEdit = () => {
        dispatch(enterEditMode(note));
    }

    const onCancel = () => {
        dispatch(leaveEditMode(note));
    }

    const onSave = () => {
        dispatch(startSavingNote({
            id: note.id,
            message,
        }));
    }

    const onDelete = () => {
        dispatch(startDeletingNote(note));
    }

    if (note.isEditing) {
        return (
        <div className="note">  
            <div className="top">   
                {/* <input type="text" value={id} onChange={e =>
                setNumber(parseInt(e.target.value))} /> */}
                <button onClick={onSave}>save</button>  
                <button onClick={onCancel}>cancel</button>
                <button onClick={onDelete}>delete</button>
             </div>

             <div className="bottom">
                <textarea value={message} onChange={e => setMessage
                (e.target.value)}/>
             </div>
        </div>
        );
    } else {

    return (
        <div className="note">  
            <div className="top">          
                <button onClick={onEdit}>edit note</button>
            </div>

            <div className="bottom">
                {note.message}
            </div>
        </div>
    );
    }
}