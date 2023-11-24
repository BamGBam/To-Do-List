import { useState } from "react";



const StateFunction = () =>{
    const [person, SetPerson] = useState({
        firstname : '',
        lastName: '',
        middleName: ''
    });

    const [drink, setDrink] = useState({
        title: 'Americano',
        price: 5,
    });

    const handlClick = () =>{
        const newDrink = {
            title : drink.title,
            price: 6
        }
        setDrink(newDrink);
    };

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const fullName = firstName + ' '+ lastName;
    const [isLoading, setLoading] = useState(false);

    return(
        <>
        <div>
            {drink.price}
            <button onClick={handlClick}> Click me</button>
        </div>
        </>
    )
}

export default StateFunction;