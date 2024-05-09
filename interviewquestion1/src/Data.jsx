import React, { useEffect, useState } from 'react'
import Post from './Post'

export const Data = () => {
    const [uId, setUid] = useState (1)
    const [user, setUser] = useState([])
    const fetchData =async () =>{
        const data = await fetch(`https://dummyjson.com/users/${uId}`)
        const data2 = await fetch(`https://dummyjson.com/users/`)
        const res = await data.json()
        const res2 = await data2.json()
        console.log(res);
        setUser(res)
    }
useEffect(()=>{
fetchData()
},[])
const handleIdchange = (e) =>{
    setUid(e.target.value)
}
const handleSubmit = () =>{
    fetchData()
}

  return (
    <div>
    <Post main={user} 
    handleSubmit = {handleSubmit}
    handleIdchange = {handleIdchange}
    value = {uId}
    />
    </div>
  )
}
