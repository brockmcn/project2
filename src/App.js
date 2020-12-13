import './App.css';
import {Note} from './Note';
import {useSelector, useDispatch} from 'react-redux';
import {loadNumber, startAddingNote} from './action';
import React, {useEffect} from 'react';

const id = 0;

function App() {

  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loadNumber(id));
  }, [dispatch]);

  const onAdd = () => {
    dispatch(startAddingNote(id));
  }
  
 
  return (
     <div className="App">
      <header className="App-header">   
        <h1>
          Trip Planner
        </h1>
      </header>
      <h2>Destination</h2>
      <h3>(google maps link)</h3>
      <h2>Dates</h2>
      <h3>(calendar)</h3>
        <div>
          <h2>Notes</h2>
          <div className="notes">
          <button onClick={onAdd}>new note</button>
            {/* <li> */}
              {notes.map(note => <Note key={note.id} note={note}/>)}
            {/* </li> */}
          </div>            
        </div>
      </div>
  );
}

export default App;
