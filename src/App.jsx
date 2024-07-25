import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router'
import Menu from './Components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
        <Header/>
        <Outlet/>
        <Menu/>
     </div>
    </>
  )
}

export default App
