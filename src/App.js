import './style.css'
// import todoList from './toDoList';
// import Game from './toDoList';
import FinalLook from './FinalLook';
// import Welcome from './Components/Insertion';
// import Comment from './Components/Insertion';
// import Date from './Components/Date';
// import Tools from './Components/Tools';
import Buttons from './Components/Buttons';
// import Tasks from './Components/PropsPractice';
// import Alert from './Components/Alert';
import { Alert } from './Components/Alert';
import { useState } from 'react';

function App() {
  const [alertItem, setAlertItem] =  useState([ {type: 'type 1', sound: 'Fire Alert'}, 
  {type: 'type 2', sound: 'Water Alert'}, {type: 'type 3', sound: 'Safety Alert'}]); 
  const [alertVisible, setAlertVisible] = useState(false);


  return (
    <div className="App">
      {/* <FinalLook /> */}
      <FinalLook typebutton = {<Buttons/>}/>
      {/* <Welcome/> */}
      {/* <Comment/> */}
      {/* <Date/> */}
      {/* <Buttons/> */}
      { alertVisible && <p>This is new type of alert</p>}
      <button onClick={ () => setAlertVisible(true)}> This is alert</button>
      {/* <Tools name = "Bamdad" tool ="AutoCad"/> */}
      {/* <Tasks/> */}
      {/* <Alert alertItem = {alertItem}/> */}
    </div>
  );
}
 
export default App;
