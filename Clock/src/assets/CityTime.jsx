import React, { useEffect, useState } from 'react'

export const CityTime = ({city}) => {
const [time , setTime] = useState(new Date())
    const formattedtime = time.toLocaleTimeString("en-US",{
        timeZone: city.timezone,
        hour12: false
    })
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

  return (
    <>
    
    <div className='city'>
        <h2 className='city-name'>{city.name}</h2>
        <div>
         <h3 className='city-name'>{formattedtime}</h3></div>
    </div>
    </>
  )
}
