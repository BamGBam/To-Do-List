import React, { Component } from 'react'
import { useState } from 'react'

const DoneButton = () =>{
    return(
    <button onClick={() => alert("Proud of you")}>
     Finally Done
    </button>
    )

}

const AddButton = () =>{
    return(
    <button onClick={() => alert("You added a new file")}>
    Adding new one
    </button>
    )
}

const PrintButton= () =>{
    return(
    <button onClick={() => window.print()}>
    Alert button
    <p>Click above button opens print preview with these words on page</p>
    </button>
    )
}

const OnScreen = () =>{
    const [text, setText] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      setText(event.target[0].value);
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button onClick={() => alert('You Added a new Task')} className="btn">ADD</button>
        </form>
        <h1>{text}</h1>
      </div>
    );
}

const Buttons = () =>{
    return(
    <div>
    {/* <DoneButton/>
    <AddButton/>
    < PrintButton/> */}
    <OnScreen/>
    </div>
    )
}

export default Buttons;