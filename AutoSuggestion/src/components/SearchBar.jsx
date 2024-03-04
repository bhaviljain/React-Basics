import React, { useState } from 'react'
import './Search.css'
import Data from "../constants/state.json"
const SearchBar = () => {
  const [searchData, setSearchData] = useState([])
  const [searchInput, setSearchInput] = useState('')

  
  const handleChange = (e) => {
    const value = e.target?.value
    setSearchInput(value)
  
  if(value)
{
  const FilteredData = Data.filter((items)=>{
    return items?.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  
  })
setSearchData(FilteredData)
}
else{
  setSearchData([])

}
}
const textOninput = (name) => {
if(name)
{
  setSearchInput(name)
  setSearchData([])
}
}


  return (
    <>
    <div className='main'>
        <input className='search' type='search'
        value={searchInput}
        onChange={handleChange}
        />
        <div className='search'>Search</div>

        <div>
        </div>
        </div>
         <div className='search-items'>
          <ul>
     {searchData.slice(0,5).map((items)=>{
     return<li onClick={()=>textOninput(items.name)}>{items.name}</li>
     })}
          </ul>
          </div> 
        </>
        
  )
}

export default SearchBar