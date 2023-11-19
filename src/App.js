// import './style.css'
import todoList from './toDoList';
import Game from './toDoList';
import FinalLook from './FinalLook';
import Welcome from './Components/Insertion';
import Comment from './Components/Insertion';
import Date from './Components/Date';
import Tools from './Components/Tools';

function App() {
  return (
    <div className="App">
      <FinalLook/>
      {/* <Welcome/> */}
      {/* <Comment/> */}
      {/* <Date/> */}
      <Tools name = "Bamdad" tool ="AutoCad"/>
    </div>
  );
}
 
export default App;
