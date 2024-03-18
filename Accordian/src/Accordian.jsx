import React, { useState } from 'react'
import Faq from './Faq'

export const Accordian = ({title, answer}) => {
  const [acc , setAcc] = useState(false)
  return (
    <div className='py-2' >
      <button onClick={()=>setAcc(!acc)}  className='flex justify-between w-full bg-indigo-700'>
        <span className='m-auto'>
          {title}
        </span>
        <span className='text-white text-2xl'>{acc ? "-" : "+"}</span>
      </button>

      <div className={`grid overflow-hidden transition-all duration-700 ${acc ? "grid-rows-[1fr] opacity-90" : "grid-rows-[0fr] opacity-0"}`}>
       
        <div className='font-bold bg-zinc-500 overflow-hidden'>{answer}</div>
      </div>
    </div>
  )
}


