import { useState } from 'react'
import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [Products, setProducts] = useState([])
  
 

  const productFetch = async() =>{
    const data = await fetch('https://fakestoreapi.com/products')
    const json = await data.json()
    // console.log(json);
  
    console.log(json);
    setProducts(json)
  }

  useEffect(() =>{
    productFetch()
    fetchData()
  },[])
  
  const fetchData = () =>{
    const productFetch = async() =>{
      const data = await fetch('https://fakestoreapi.com/products')
      const json = await data.json()
      // console.log(json);
          setProducts(Products.concat(json))
    }
    productFetch()
  }



  return (
  <>

<div>
  <ol>
    {Products.map((prod)=>{
return(
  <li>
   <img className='img' src={prod.image}></img>
   <h5>{prod.title}</h5>
  </li>
)
    })}
  </ol>
  <InfiniteScroll
  dataLength={Products.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
 
>
</InfiniteScroll>
</div>
  
  </>
  )
}

export default App
