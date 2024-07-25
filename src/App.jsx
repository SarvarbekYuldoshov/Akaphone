import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router'

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
