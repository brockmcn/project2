import './App.css';
import {Notes} from './Notes';
import {useSelector, useDispatch} from 'react-redux';
import {loadNotes} from './action';


function App() {

  const notes = useSelector(state => state.memories);
  const dispatch = useDispatch();

  const onLoad = () => {
    dispatch(loadNotes([
      {number: 1, message: "random message"},
     ]));
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
        <div className="notes">
          <h2>Notes</h2>
            {/* <button onCLick={onLoad}>test button</button>
            {notes.map(note => <Notes note={note} />)} */}
        </div>
      </div>
  );
}

export default App;
