import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const UsersComponent = () => {
    const [users ,setUsers] = useState([])
    async function fetchUsers() {
        const res = await fetch("https://dummyjson.com/users")
        const data = await res.json()
        setUsers(data.users)
    }
    useEffect(()=>{
         fetchUsers()
    },[users])
    return (
      <>
      <h3 className='m-2 p-2'>Users</h3>
        <div className="d-flex flex-wrap gap-3 m-2"> 
            {users.map((user) => {
                return (
                  
                    <div className="card" style={{ width: "18rem", background: "lightgray" }} key={user.id}>
                        <div className="card-body">
                            <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                            <p className="card-text">{user.email}</p>
                            <Link href={`/users/${user.id}`} className="btn btn-outline-dark">See Details</Link>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    );
};

export default UsersComponent;