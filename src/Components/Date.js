const Date = (props) =>{
    return <h1> Hellooo, {props.date} </h1>
}


const Dates = () => {
    return(
        <div>
            <Date date = 'Jan 1st'/>
            <Date date = 'Feb 1st'/>
            <Date date = 'March 1st'/>
            <Date date = 'April 1st'/>
        </div>
        )
}

export default Dates;