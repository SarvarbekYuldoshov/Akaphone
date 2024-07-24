import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import About from "./Components/About/About"
import { Outlet } from 'react-router'
import Korzinka from './Components/Korzinka/Korzinka'
import Shopping from './Components/Shopping/Shopping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
        <Header/>
        <Outlet/>
     </div>
    </>
  )
}

export default App
