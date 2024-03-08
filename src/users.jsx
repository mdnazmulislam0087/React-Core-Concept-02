import { useEffect, useState } from "react"

export default function Users(){
    const[users, setUsers]= useState([])
    useEffect(()=>{
        fetch = ('https://jsonplaceholder.typicode.com/users')
        .then ( res => res.json())
        .then (data =>console.log(data))
    },[])

    return (
        <div>

        </div>
    )
}

// 1. Declare a state to hold the data
// useEffect with callback and dependencies array
// use fetch to load data
