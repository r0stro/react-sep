import React, {useEffect, useState} from 'react';
import User from "../user/User";

const Users = ({getUser}) => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
        </div>
    );
};

export default Users;