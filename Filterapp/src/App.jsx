import { useState } from 'react'
import './App.css'
import Data from './Data'
import { Category } from './Category'
import { Button } from './Button'
function App() {
const [item, setItem] = useState(Data)
const menuItems = [...new Set(Data.map((val)=>val.category))]


 const filterData = (cat) =>{
  const newItems = Data.filter((cats)=>cats.category === cat)
  setItem(newItems)
}

  return (
    <>
    <Button menuItems={menuItems}
    filterData={filterData}
    setItem={setItem}
    />
     <Category item={item}/>
     
    </>
  )
}

export default App
