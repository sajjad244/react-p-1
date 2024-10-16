import { useEffect, useState } from "react"
import './User.css'
import Friend from "./Friend";


export default function User(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    return(
        <div className="box">
            <h3>user : {users.length}</h3>
            {
                users.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

