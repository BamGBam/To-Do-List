import React, { Component } from 'react'
import { useState } from 'react'
// import { Alert } from './Alert'

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

const AlertButton = () => {
    return(
     <>
        <div>
            <alert>hooooys</alert>
        </div>
        <button> This is Alert button</button>
    </>
    )
}

const Buttons = () =>{
    return(
    <div>
    {/* <DoneButton/>
    <AddButton/>
    < PrintButton/> */}
    {/* <OnScreen/> */}
    {/* <AlertButton/> */}
    </div>
    )
}

export default Buttons;