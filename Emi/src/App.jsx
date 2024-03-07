import { useEffect, useState } from 'react'

function App() {
  const [amt , setAmt] = useState(0)
  const [interest , setinterest] = useState(0)
  const [years , setyears] = useState(0)
  const [emi , setEMI] = useState(0)

 const handleChange = (e)=>{
  console.log(e.target.value);
  const id= e.target.id
  const value = parseInt(e.target.value)
  if(id === 'amt')
  {
    setAmt(value)
  }
  else if(id === 'interest')
  {
    setinterest(value)
  }
  else{
    setyears(value)
  }
 }
 //P(r(1+r)^n/((1+r)^n)-1))

const Calculates = ()=>{
  let r = interest;
    if (amt && r && years) {
      r = r / 12 / 100; // per month
      const calcPow = Math.pow(1 + r, years * 12);
      const amount = amt * ((r * calcPow) / (calcPow - 1));
      setEMI(Math.round(amount));

}
}
useEffect(()=>{
  Calculates()
},[amt,interest,years])
return (
  <div className='loan-calc'>
    <h1>Mortgage Caclulator</h1>

    <div className='inputes'>
      <p>Principale:</p>
      <input
        onChange={handleChange}
        type='number' id='amt' />

      <p>Interest:</p>
      <input
        onChange={handleChange}
        type='number' id='interest' />

      <p>Years:</p>
      <input
        onChange={handleChange}
        type='number' id='year' />
    </div>

    <div className='output'>
      Your EMI is {emi}
    </div>
  </div>
)
}

export default App
