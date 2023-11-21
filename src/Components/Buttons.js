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

const Buttons = () =>{
    return(
    <div>
    <DoneButton/>
    <AddButton/>
    </div>
    )
}

export default Buttons;