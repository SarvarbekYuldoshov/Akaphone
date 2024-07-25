import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../Card/Card'

function Details() {
    const [single,setSingle] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const updateCard = Card.filter((item)=>item.id.toString()===id)
        setSingle(updateCard)
    },[])
  return (
    <div>
      {
        single.map(item=>{
            return(
                <div key={item.id}>
                 <div className='container detail-container'>
                    <h1 className='korzinka-title'>{item.name}</h1>
                    <p className='korzinka-text'></p>
                    <img className='korzinka-img'src={item.img} alt="" /> 
                 </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Details
