import Title from './component/Title'
import './App.css'
import { useState } from 'react'

function App() {
const[toggle, setToggle]=useState(true)

const toggleCheck=()=>{
  setToggle((prev)=>!prev)

}
console.log(toggle)
  return (
   <div className="app">
    {
      toggle &&  <Title/>
    }

    <button onClick={toggleCheck}>Toggle</button>

   </div>  )
}

export default App
