import sl1 from '../src/img/img1.jpg'
import sl2 from '../src/img/img2.jpg'
import sl3 from '../src/img/img3.jpg'
import sl4 from '../src/img/img4.jpg'
import sl5 from '../src/img/img5.jpg'
import sl6 from '../src/img/img6.jpg'
import React from "react";
import Slider from "react-slick";


function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <>
   <div className='w-[50%] m-auto'>
   <Slider {...settings}>
 
      <div>
        <img src={sl1}></img>
      </div>
      <div>
      <img src={sl2}></img>
      </div>
      <div>
      <img src={sl3}></img>
      </div>
      <div>
      <img src={sl4}></img>
      </div>
      <div>
      <img src={sl5}></img>
      </div>
      <div>
      <img src={sl6}></img>
      </div>
    </Slider>
   </div>
   </>
  )
}

export default App;
