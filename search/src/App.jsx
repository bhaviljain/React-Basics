import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [name, setName] = useState([])
  const [search, setSearch] = useState('')


  const fetchData = async() =>{
    const data = await fetch("https://api.fake-rest.refine.dev/users")
    const res = await data.json()
    console.log(res);
    setName(res)
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <input type='text'
     onChange={(e)=>setSearch(e.target.value)}
      >
      </input>
{name.filter((item)=>{
  return search.toLowerCase() ==='' ? item: item.firstName?.toLowerCase().includes(search)
  

}).map((n,index)=>{
        return(
      <div>
        {n.firstName} {n.lastName}
      </div>
        )
      })}

    </>
  )
    
}

export default App
