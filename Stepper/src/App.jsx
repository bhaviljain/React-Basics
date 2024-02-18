import { useState } from 'react'
import './App.css'
import Checkoutstepper from './stepper'
function App() {
  const steps = ([
    {name: "Customer info",
    component: ()=> <div>Provide your contact details </div>
   },
    {name: "Shipping info",
    component: ()=> <div>Please enter AWB number </div>
   },
    {name: "Payment",
    component: ()=> <div>Please complete the payemnt to proceed</div>
   },
    {name: "Delivered",
    component: ()=> <div>Your order has been delivered</div>
   },
  ])

  return (
    <>
      
      <Checkoutstepper steps={steps}/>
    </>
  )
}

export default App
