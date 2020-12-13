import './App.css';
import {Note} from './Note';
import {useSelector, useDispatch} from 'react-redux';
import {loadNumber, startAddingNote} from './action';
import React, {useEffect} from 'react';

const id = 0;

/* function eventHandler(event) {

}
 */
// function text() {
//   const t = document.getElementById("")
// }

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
      <input id="dest"></input>
      <button id="d">go!</button>
      
      {/* var text = document.getElementById('dest').value;
      <p id="addy">text</p> */}

      {/* function eventHandler() { 
            var x = document.getElementById('textArea'); 
            x.value = "GeeksforGeeks"; 
        } 
       */}
      
            {/* var loc = document.getElementById("dest").value;
          document.getElementById("addy").innerHTML = loc}; */}
        


      <h2>Dates</h2>
      <label>Departure Date: </label>
      <input type="date" id="departure"></input>
      <label>Arrival Date: </label>
      <input type="date" id="arrival"></input>
      

        <div>
          <h2>Notes</h2>
          <div className="notes">
          <button id="new" onClick={onAdd}>new note</button>
            {/* <li> */}
              {notes.map(note => <Note key={note.id} note={note}/>)}
            {/* </li> */}
          </div>            
        </div>
      </div>
  );
}

export default App;
