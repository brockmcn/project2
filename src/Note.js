import React from 'react';

export function Note(props) {
    const note = props.note;

    return (
        <div className="note">            
            <span className="number">{note.number}</span>

            {note.message}
        </div>
    );
}