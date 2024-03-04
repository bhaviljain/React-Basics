import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const inputHandlered  = (value)=>{
  setInput(input + value)
  }
  const resultHandle = ()=>{
    try{
      const result = eval(input)
      setInput(result)
    }
    catch(error)
    {
      setInput(error)
    }
   
  }
  const clear = ()=>{
    setInput("")
  }
  const Delete = ()=>{
    let del= input.substring(0, input?.length - 1)
    setInput(del)
  }
  return (
    <>
   <div className="main">
    <input className='input-box'
    value={input}
    />
    <div className='button-items'>
      <button onClick={clear}>C</button>
      <button onClick={Delete}>D</button>
      <button onClick={()=>inputHandlered("%")}>%</button>
      <button onClick={()=>inputHandlered("/")}>/</button>

      <button onClick={()=>inputHandlered(1)}>1</button>
      <button onClick={()=>inputHandlered(2)}>2</button>
      <button onClick={()=>inputHandlered(3)}>3</button>
      <button onClick={()=>inputHandlered("*")}>*</button>

      <button onClick={()=>inputHandlered("4")}>4</button>
      <button onClick={()=>inputHandlered("5")}>5</button>
      <button onClick={()=>inputHandlered("6")}>6</button>
      <button onClick={()=>inputHandlered("-")}>-</button>

      <button onClick={()=>inputHandlered("7")}>7</button>
      <button onClick={()=>inputHandlered("8")}>8</button>
      <button onClick={()=>inputHandlered("9")}>9</button>
      <button onClick={()=>inputHandlered("+")}>+</button>

      <button onClick={()=>inputHandlered("0")}>0</button>
      <button onClick={()=>inputHandlered(".")}>.</button>
      <button onClick={resultHandle} className='equal'>=</button>
    </div>
   </div>
    </>
  )
}

export default App
