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
import { useEffect, useRef, useState } from 'react';
import Form from './Components/Form';
import StateFunction from './Components/State';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Game from './Components/Game';
import Pizza from './Components/Pizza';
import Text from './Components/Text';
import ExpandableText from './Components/ExpandableText';
import ProductList from './Components/ProductList';
import axios from 'axios'
import Fetch from './Components/Fetch';

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

  // const ref = useRef<HTMLInputElement>(null);
  // const ref = useRef<HTMLInputElement>(null);

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get()
  // })

  // useEffect(()=> {
  //   if (ref.current) ref.current.focus();
  // });

  useEffect(()=> {
    document.title = 'Hello Jigarrrr App'
  });

  return (
    <div className="App">
      {/* <FinalLook /> */}
      {/* <FinalLook typebutton = {<Buttons/>}/> */}
      {/* <Welcome/> */}
      {/* <Comment/> */}
      {/* <Date/> */}
      <Buttons/>
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
      {/* <ExpandableText> 
      Input:  the transferring of  information into a computer system; data entry. In addition to the commonly found methods of input (keyboard, scanner, flash drive, CD), data can also be entered via vocal dictation and even body movements. For our purposes, input will be accomplished when you, the programmer, type source code at the keyboard or open a previously typed program.

Processing:  the manipulation and control of information (data) within the computer system. The Central Processing Unit (CPU) is the "brain" of a computing device.  Manipulations are handled by the Control Unit, the Arithmetic Logic Unit and Temporary Storage. The Control Unit is the computer's "policeman" that directs the traffic of the computer's "thinking". The Arithmetic Logic Unit performs mathematical and logical computations, and the Temporary Storage (RAM) holds the "thoughts" of the CPU.

Storage:  the means by which information can be "permanently" saved (until such time as you wish to delete it).  This storage may be a computer's internal or external storage. Storage usually occurs on a hard drive, flash drive, a CD, or a cloud account.
    
Output:  the displaying of information. Output may occur via a display monitor, audio file, hard-copy printing on paper, or printing as 3-D models. For our purposes, output will be accomplished when your program displays information on the monitor.
      </ExpandableText> */}
      {/* <input ref={ref} type="text" /> */}
      {/* <ProductList /> */}
      <Fetch />
    </div>
  );
}
 
export default App;
