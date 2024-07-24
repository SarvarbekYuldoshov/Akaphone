import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import About from "./Components/About/About"
import { Outlet } from 'react-router'
import Korzinka from './Components/Korzinka/Korzinka'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
        <Header/>
        <About/>
        <Korzinka/>
        <Outlet/>
     </div>
    </>
  )
}

export default App
