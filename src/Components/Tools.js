
const Tools = (props) =>{
    const name = props.name;
    const tool = props.tool;
    return(
        <div>
            <h1> My name is {name}</h1>
            <h1> And my Favorite design tool is {tool}</h1>
        </div>
    )
}

export default Tools;