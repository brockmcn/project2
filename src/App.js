import './App.css';
import {Note} from './Note';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay} from './action';
import React, {useEffect} from 'react';


function App() {

  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loadDay(4, 7));
  }, [dispatch]);
 
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
            <li>
              1. sample note
              {/* use this when backend stuff works {notes.map(note => <Note key={note.id} note={note}/>)} */}
            </li>
            <li>
              2. sample note
              {/* use this when backend stuff works {notes.map(note => <Note key={note.id} note={note}/>)} */}
            </li>
            <li>
              3. sample note
              {/* use this when backend stuff works {notes.map(note => <Note key={note.id} note={note}/>)} */}
            </li>
          </div>            
        </div>
      </div>
  );
}

export default App;
