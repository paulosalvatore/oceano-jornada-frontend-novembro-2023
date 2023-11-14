import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h2>Rick Sanchez</h2> 
          <div className="tags">
            <div className="tag">teste1</div>
            <div className="tag">teste2</div>            
            <div className="tag">teste3</div>    
            </div> 
        <img src ="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
      </div>           
      <br/>
      <Card />
    </>
  )
}

export default App
