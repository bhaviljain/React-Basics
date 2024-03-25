import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [rate, setRate] = useState(0)
  const [hover,setHover] = useState(0)

  return (
    <>
     {
      [1,2,3,4,5].map((num)=>{
        return (
          <button className='btn'
          onClick={()=>setRate(num)}
          onMouseOver={()=>setHover(num)}
          onMouseLeave={()=>setHover(rate)}
          >          
            <span
            className={`star  ${num<=((rate && hover) || hover) ?"on" : "off"}`
                          
          }
            >&#9733;</span>
            </button>

        )
      })
     }
    </>
  )
}

export default App
