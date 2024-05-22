import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Population from './population'

function App() {
 const [populate ,setPopulation] = useState([])
 const [search , setSearch] =useState('')
 
function DeleteBtn (index){
  const newList = populate.filter((result)=>result.index !== index)
  setPopulation(newList)
  console.log(index);
}

const fetchPopulation = async() =>{
  const dataFetched = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  const json = await dataFetched.json()
  console.log(json);
  setPopulation(json.data)
}
useEffect(()=>{
  fetchPopulation()
},[])

  return (
    <>
            <div className="flex flex-wrap justify-center"> 
            <input
            onChange={(e)=>setSearch(e.target.value)}
            type='text'/>
<tr>
<th id='year'>Year

</th>
 <th id="population">Population
 
</th>
 </tr>

{populate.filter((item, index)=>{
  return search.toLowerCase() === ''? item : item.Year.toLowerCase().includes(search)
}).map((obj)=>{
  
  return(
    


  <table key={obj.index} id='table'>

 <td >{obj.Year}
 
 </td>
 <td id='years'>{obj.Population}</td>
 <span id='btn' onClick={()=>DeleteBtn(obj.index)}> X
 </span>

  </table>

  

)
})}
    
  </div>
    </>
  )
}

export default App
