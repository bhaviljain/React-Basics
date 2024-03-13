import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const items = [{
    imageUrl  : "https://media.istockphoto.com/id/1684716201/photo/indigo-bunting-with-sunflowers.webp?b=1&s=170667a&w=0&k=20&c=dIGsalQYCprfoAO4-IIjpiKmAdMo0tiLTNQ2jBA7cTo=",
    title: "Image 1"
  },
  {
    imageUrl:"https://media.istockphoto.com/id/1273350961/photo/beautiful-water-lily-in-pond.webp?b=1&s=170667a&w=0&k=20&c=_4Wf8oqnTttjnw_AfwGpdYk02OgFBIN4R7H5gTtm40w=",
    title: "Image 2"
  },
  {
    imageUrl: "https://media.istockphoto.com/id/495436696/photo/beauty-in-nature.webp?b=1&s=170667a&w=0&k=20&c=FpKfDiH-CdmKbpE6puPwNJcuqPzE0liEu-XBiGBXXTM=",
    title: "Image 3"
  }
 ]
 const [active , setActive] = useState(0)

 const handleNext = () =>{
  if(active === items.length - 1)
  {
    setActive(0)
  }
  else{
  setActive(active=> active + 1)
  }
 }
 const handlePrev = () =>{
  if(active === 0)
  {
    setActive(items.length - 1)
  }
  else{
  setActive((active)=> active - 1)
  }
 }


 useEffect(()=>{
  let timer = setTimeout(()=>{
    handleNext()
  },5000)
  return  () => clearTimeout(timer)
 },[active])


  return (
    <>
     <div>
     <img src={items[active].imageUrl}></img>
     </div>
     <button onClick={handlePrev}>Prev</button>
     <button onClick={handleNext}>Next</button>
    </>
  )
}

export default App
