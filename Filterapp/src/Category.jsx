import React from 'react'

export const Category = ({item}) => {
    console.log(item);
  return (
    <div className='flex gap-10 justify-center items-center mt-20'>
        {item.map((val)=>{
            return(
                <div>
                   <h3>{val.title}</h3>
                   <img src={val.img}
                   className='h-20'
                   />
                   <h5> RS: {val.price}</h5>
                </div>
            )
        })}
    </div>
  )
}
