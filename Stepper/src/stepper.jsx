import React from 'react'
import { useState } from 'react'

const Checkoutstepper = ({steps =[]}) => {
    const [current, setcurrent] = useState(1)
    const [completed, setcompleted] = useState(false)
    
    const calculateBar = () => {
        return ((current - 1) / (steps.length - 1)) * 100
    }

    const handleNext = () => {
         setcurrent(prev =>{
  if(prev === steps.length){
   setcompleted(true)
   return prev
  }
  else{
   return prev+1
  }
         })
    }
   const ActiveComponent  = steps[current - 1]?.component
  return (
    <>
    <div className='step-main'>
    {steps.map((step, index) => {
       
    return(
    
    <div key={step.name} className={`step
    ${current > index + 1 || completed ?"complete" :" "}
    ${current === index + 1 ? "active" : " "}
}`
    }>
         <div className='step-number'> {current > index + 1 || completed ? (
            <span>✓</span>
         ) :(
            index+1
         
         )}
         
         </div>
       
       <div className='step-name'> {step.name}</div>
       
       </div>)
    })}

    </div>

    <div className='progess-bar'>
        <div className='progess' style={{width:`${calculateBar()}%`}}>

        </div>
    </div>
    <ActiveComponent />

    <button className='btn'
    onClick={handleNext}
    >
     {current === steps.length ? "Finish" :"Next"}
    </button>
    </>
  )
}

export default Checkoutstepper






















  