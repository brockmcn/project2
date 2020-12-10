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
 
/*   const notes = [
    {id: 1, number: 1, message: "hey"},
    {id: 2, number: 2, message: "hi"},
    {id: 3, number: 3, message: "hello"},
  ];
 */
  //const notes = useSelector(state => state.memories);
  //const dispatch = useDispatch();

  //const onLoad = () => {
  //  dispatch(loadNotes([
  //    {number: 1, message: "random message"},
  //   ]));
  //}
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
        <div className="notes">
          <h2>Notes</h2>
            <div>
              {notes.map(note => <Note key={note.id} note={note}/>)}
            </div>
            {/* <button onCLick={onLoad}>test button</button>
            {notes.map(note => <Notes note={note} />)} */}
            
          </div>
      </div>
  );
}

export default App;
