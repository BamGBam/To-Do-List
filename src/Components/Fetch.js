import { useState, useEffect } from "react";
import apiClient, {CanceledError} from "../Services/api-client";


const Fetch = () =>{
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

useEffect(() =>{
    apiClient.get('/users')
    .then(res => setUsers(res.data))
    .catch(err => setError(err.message));
}, [])

    const deleteUser = (user)=>{
        setUsers(users.filter(u => u.id !== user.id))
    }
//      {/* <Game Game = {game} onClear={() => setGame({...game, player: {name: 'Bob'}})} /> */}
 
    const addUser = (user) => {
        const newUSer = { id: 0, name: 'Mosh'};
        setUsers([...users, newUSer])
    }

    // {/* <Pizza pizza={pizza} onClear={() => setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']})} /> */}


    const updateUser = (user) =>{
        const originalUsers = [...users];
        const upUser = {...user, name: user.name + '!'};
        setUsers(users.map(u => u.id === user.id ? upUser : u))

        apiClient.patch('/users/' + user.id, upUser)
        .catch(err => {
            setError(err.message);
            setUsers(originalUsers)
        })
    }


    return(
        <>
             {/* {console.log({res.data})} */}
            {error && <p>{error}</p>}
            <button onClick={() => addUser(users)}>Add User</button>
            <ul>
                {users.map((user) => (
                <li> {user.name} 
                <button onClick={() => deleteUser(user)}>Delete</button>
                <button onClick={() => updateUser(user)}>Update</button>
                </li>))}
            </ul>
        </>
    )
}

export default Fetch;