import { useState } from "react";
//This is for using map in REACT
// // './Components/TaskList';
// interface Props{
//     items: String[];
//     books: String;
// }

const Tasks = () =>{
    let items = ['finishing HW', 'LeetCoding', 'Going to Gym'];
    // items  = []
    // let books = ['Reading Your next five move', 'Reading Hardthings about hard things'];
    //This is how to use if statement
    // const emptyMessage = items.length === 0? <p> Ther is no Item in the list</p> : <p>There is {items.length} items in the list</p>
    //Writing a function to do that
    // const getMessage = () =>{
    //     return(
    //         <>
    //         {items.length === 0? <p> Ther is no Item in the list</p> : <p>There is {items.length} items in the list</p>}
    //         </>
    //     )
    // }
    // const handleClick = (event) =>{ console.log(event) }
    // const handleClick = (item) =>{ console.log(item) }
    const [selectedIndex, setSelectedIndex] =  useState(-1);
    
    return(
        <>
            <ul>
                {items.map((item, index) => (<li key= {item} onClick={() => {setSelectedIndex(index);}}> {item} </li>))}
                {/* {items.length === 0? <p> Ther is no Item in the list</p> : <p>There is {items.length} items in the list</p>}
                {emptyMessage}
                {items.map((item) => (<li key = {item}> {item} </li>))}
                {books.map((books) => (<li key = {books}> {books}</li>))} */}
                {/* {getMessage()} */}
            </ul>
        </>
    )

}
export default Tasks;