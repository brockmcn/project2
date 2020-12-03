import React from 'react';

export function Notes(props) {
    const notes = props.notes;

    return (
        <div className="note">            
            <hi>Notes</hi>
            <span className="number">{notes.number}</span>
            {notes.message}
        </div>
    );
}