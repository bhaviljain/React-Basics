import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(50)
  
  useEffect(()=>{

    const onScroll = ()=>{
   if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 30)
   {
    setCount(count + 50)
   }
  }
    window.addEventListener("scroll", onScroll)

    return  () =>    
     window.removeEventListener("scroll", onScroll)
  
  })



  const ele = []
  for(let i=0; i<count; i++)
{
  ele.push(<div>{i + 1}</div>)
}  

  return (
    <>
      <>{ele}</>
    </>
  )
}

export default App
