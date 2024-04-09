import React, { useEffect, useState } from 'react'

const Traffic = () => {
    const [active , setActive] = useState('red')


    const LIGHTS  = {
        red :"red",
        green :"green",
        yellow :"yellow",
    }

    useEffect(()=>{
        switch(active){
            case LIGHTS.red:
                setTimeout(()=>{
                    setActive(LIGHTS.yellow)
                },4000)
                break
            case LIGHTS.yellow:
                setTimeout(()=>{
                    setActive(LIGHTS.green)
                },500)
                break
            case LIGHTS.green:
                setTimeout(()=>{
                    setActive(LIGHTS.red)
                },3000)
                break

        }
    },[active])

  return (
    <>
    <div className='main'>
    <div className='light red'
    style={active !== LIGHTS.red ? {opacity: 0.5} : null}
    >Red</div>
    <div className='light yellow'
     style={active !== LIGHTS.yellow ? {opacity: 0.5} : null}
    >Yellow</div>
    <div className='light green'
     style={active !== LIGHTS.green ? {opacity: 0.5} : null}
    >Green</div>
    </div>
    </>
  )
}

export default Traffic