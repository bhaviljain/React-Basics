import { useState } from 'react'

import './App.css'
import { Modal } from './Modal'

function App() {
const [isShow , setIsShow] = useState(false)
const [isOfferAccepted , setisOfferAccepted] = useState(false)

const closeBtn = ()=>{
  setIsShow(false)
}
const handleOpenModal =()=>{
  setIsShow(true)
}
const offerAccept = ()=>{
  setisOfferAccepted(true)
  setIsShow(false)
}
  return (
    <>
    <div className='show-offer'>
   {!isOfferAccepted && <button onClick={handleOpenModal} className='show-btn'>Show</button>}
    </div>
    {
      isOfferAccepted &&
      <div className='offer'>Offer Accepted</div>
    }
    <div>

      {isShow && <Modal closeBtn={closeBtn} offerAccept={offerAccept}/>}
    </div>
    </>
  )
}

export default App
