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
import Form from './Components/Form';
import StateFunction from './Components/State';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Game from './Components/Game';
import Pizza from './Components/Pizza';
import Text from './Components/Text';
import ExpandableText from './Components/ExpandableText';
function App() {
  const [alertItem, setAlertItem] =  useState([ {type: 'type 1', sound: 'Fire Alert'}, 
  {type: 'type 2', sound: 'Water Alert'}, {type: 'type 3', sound: 'Safety Alert'}]); 
  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, SetCartItems] = useState(['Task1', 'Task2'])
  const [game, setGame] = useState({
    id: 1,
    player:{
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const [text, setText] = useState({
    content: ['jiggaa', 'jiggaarrrrrrrr','jiggaa', 'jiggaa', 'jiggaa', 'jiggaa', 'jiggaa']});

  return (
    <div className="App">
      {/* <FinalLook /> */}
      <FinalLook typebutton = {<Buttons/>}/>
      {/* <Welcome/> */}
      {/* <Comment/> */}
      {/* <Date/> */}
      {/* <Buttons/> */}
      {/* { alertVisible && <p>This is new type of alert</p>}
      <button onClick={ () => setAlertVisible(true)}> This is alert</button> */}
      {/* <Tools name = "Bamdad" tool ="AutoCad"/> */}
      {/* <Tasks/> */}
      {/* <Alert alertItem = {alertItem}/> */}
      {/* <Form/> */}
      {/* <StateFunction/> */}
      {/* <Cart cartItems={cartItems} onClear={() => SetCartItems([])}/> */}
      {/* <NavBar cartItemCount={cartItems.length} /> */}
      {/* <Game Game = {game} onClear={() => setGame({...game, player: {name: 'Bob'}})} /> */}
      {/* <Pizza pizza={pizza} onClear={() => setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']})} /> */}
      {/* <Text text={text} modification={()=> setText({...text, content: 'To mu'})}/> */}
    </div>
  );
}
 
export default App;
