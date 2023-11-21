// const details = {
//     title: 'TodoList',
//     ur : 'https://www.appfluence.com/productivity/wp-content/uploads/2012/08/to-do-list-template.jpg' 
// }
import './style.css'
import Buttons from './Components/Buttons';

function FinalLook(){
    return(
        <>
        {/* <Buttons/> */}
        <h1 className="header">TO DO LIST</h1>
        <div className="future-tasks">
            <div className="future-elements">
                <h2>Add New Tasks</h2>
                <input className='quantity-input' type="text" />
            </div>
            <div className="future-elements">
                <h2>Add due date</h2>
                <input className='quantity-input' type="number"/>
            </div>    
            {/* <Buttons/> */}
            <button onClick={() => alert('You Added a new Task')} className="btn"> Add </button>
        </div>
        <div className="current-tasks">
            <div className="curret-element">
                <h2>Your task</h2>
            </div>
            <div className="curret-element">
                <h2>Due date</h2>
            </div>
            <button onClick={() => alert('Nice job')} className="btn"> Done</button>
        </div>  
        </>  
        )
} 

export default FinalLook;