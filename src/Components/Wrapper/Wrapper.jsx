import React from 'react'
import "./Wrapper.css"
import useSharedStore from '../Store/Store'
const Wrapper = () => {
    const {cards,setCards}  = useSharedStore
  return (
    <div>
      Data && Data.map((item,index)=>(
        <div key={index}>
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
        </div>
      ))
    </div>
  )
}

export default Wrapper
