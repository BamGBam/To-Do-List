import { useState } from "react";
import produce from "immer";

const StateFunction = () =>{
    const [person, SetPerson] = useState({
        firstname : '',
        lastName: '',
        middleName: ''
    });

    const [drink, betDrink] = useState({
        title: 'Americano',
        price: 5,
    });

    const [tags, setTags] = useState(['happy', 'cheerful']);

    const [bugs, setBugs] = useState([
        {id : 1, title: 'Bug 1', fixed:false},
        {id : 2, title: 'Bug 2', fixed:false},
    ])

    const handlClick = () =>{
        // const newDrink = {
        //     ...drink,
        //     price: 6
        // } 
        // betDrink({...drink, price: 6});
        //
        // setTags([...tags, ' exciting']);
        // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true} : bug ))
        //Remove a tag
        // setTags(tags.filter(tag => tag !== 'happy'));
        setBugs(produce(draft => {
        const bug = draft.find(bug => bug.id === 1);
        if (bug) bug.fixed = true;
        }))

        //updating a tag
        // setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
    };

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const fullName = firstName + ' '+ lastName;
    const [isLoading, setLoading] = useState(false);

    return(
        <>
        <div>
            {tags}
            {bugs.map(bug => < p key={bug.id}>{bug.title} {bug.fixed ? 'Fixedddddd' : 'New'}</p>)}
            <button onClick={handlClick}> Click me</button>
        </div>
        </>
    )
}

export default StateFunction;