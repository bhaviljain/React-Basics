export const Modal = ({closeBtn, offerAccept}) =>{
     const handleOutsideClose = (e) =>{
      console.log(e.target.className);
      if(e.target.className === "modal")
      {
        closeBtn()
      }
     }
    return(
<div onClick={handleOutsideClose} className="modal">

  <div className="modal-content">

  <button onClick={closeBtn} className="close-btn">X</button>
    <div className="content">
    <p>Please Accept our Offer</p>
    </div>
    <button onClick={offerAccept} className='accept-btn'>

        Accept offer
    </button>
  </div>

</div>
)}