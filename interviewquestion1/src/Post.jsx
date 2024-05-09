import React from 'react'

const Post = ({handleSubmit,main,handleIdchange,value}) => {
  return (
    <div>

        <input type='text'
        value={value}
       onChange={handleIdchange}
        />
        <button onClick={handleSubmit}>Search</button>
      {main &&  <div>FirstName: {main.firstName}</div>}
      {main && <div> lastName: {main.lastName}</div>}
      {main && <div>Age: {main.age}</div>}
    </div>
  )
}

export default Post