// const details = {
//     title: 'TodoList',
//     ur : 'https://www.appfluence.com/productivity/wp-content/uploads/2012/08/to-do-list-template.jpg' 
// }
import './style.css'


function FinalLook(){
    return(
        <>
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
            <button className="btn"> Add </button>
        </div>
        <div className="current-tasks">
            <div className="curret-element">
                <h2>Your task</h2>
            </div>
            <div className="curret-element">
                <h2>Due date</h2>
            </div>
            <button className="btn"> Done</button>
        </div>  
        </>  
        )
}

export default FinalLook;