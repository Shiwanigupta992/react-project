import React, { useState } from 'react';

function Users(){
    const [users, setUsers] = useState([
        { name: 'mohan', age: 25},
        { name: 'sohan', age: 24},
    ])
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {
                    users.map((users, index)=>{
                        return <li>{users.name}, {users.age}</li>
                    })
                }
            </ul>
        </div>
    ) 
}
export default Users;