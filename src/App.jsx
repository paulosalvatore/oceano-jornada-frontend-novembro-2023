import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'

function App() {
  const [count, setCount] = useState(0)
  const item1 = {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }
  const item2 = {
    name: "Morty Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }
  return (
    <>         
      <br/>
      <Card item = {item1} />
      <Card item = {item2} />
      </>
  )
}

export default App;
