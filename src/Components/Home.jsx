import React from 'react'
import Korzinka from './Korzinka/Korzinka'
import About from './About/About'
import Main from './Main/Main'
import Menu from './Menu/Menu'

function Home() {
  return (
    <div>
        <About/>
        <Korzinka/>
        <Main/>
        <Menu/>
    </div>
  )
}

export default Home
