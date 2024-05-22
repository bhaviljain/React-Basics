import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const student1 =[
  {name:"Bhavil"
},
{
  name:"Rohit"
},
{
  name:"Hardhik"
},
{
  name:"Risabh"
},
{
  name:"Rohit"
},
 ]
 const student2 = [{name:"Tilak"},
{name:"Dhruv"},
{name:"lokesh"},
{name:"Rohit"},


]
const newArr = [...student1,...student2]
const result = [...new Map(newArr.map((user) => [user.name, user])).values()];
console.log(result);


  return (
    <>
    {
    
    result.map((items,index)=>
    {
       return(
        <div>
        <span className='main'>
          <input type='checkbox'/>
                <span key={index}>
          
          {items.name}
          <button className='btn'>-></button>

        </span>
        </span>
        <div className='main2'>
          aa
        </div>
        
        </div>
      
       )
    })}
    </>
  )
}

export default App
