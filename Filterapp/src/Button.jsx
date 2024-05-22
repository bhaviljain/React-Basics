import React from 'react'
import Data from './Data'
export const Button = ({menuItems,filterData,setItem}) => {
  return (
    <div className='flex gap-8 justify-center items-center'>
        {menuItems.map((val)=>{
            return(
                <button className='p-1 bg-black text-white hover:bg-gray-400'
                onClick={()=>filterData(val)}
                >{val}</button>
            )
        })}
        <button className='p-1 bg-black text-white hover:bg-gray-400'
        onClick={()=>setItem(Data)}
        >All</button>
    </div>
  )
}
