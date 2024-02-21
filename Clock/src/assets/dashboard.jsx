import React from 'react'
import { CityTime } from './CityTime'

const Dashboard = () => {
    const cities = [{
        name: 'New York',
        timezone:"America/New_York"
    },{
        name: 'UK',
        timezone:"Europe/London"
    },
    {
        name :"India",
        timezone:"Asia/Kolkata"
    }
]
  return (
    <>  
        <div  className='world'>
        <h1 className='text'>World Clock</h1>

            <ul className='clocklook'>
         {cities.map((city,index)=>(
               <CityTime city = {city} key={index}/>

        ))}
        </ul>
        </div>
    </>
   
  )
}

export default Dashboard