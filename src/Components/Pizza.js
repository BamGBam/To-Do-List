const Pizza = ({pizza, onClear}) =>{
    return(
        <div>
            Hello this is Pizza { pizza.toppings}
            <button onClick={onClear}>Add new topic</button>
        </div>
    )
}

export default Pizza;