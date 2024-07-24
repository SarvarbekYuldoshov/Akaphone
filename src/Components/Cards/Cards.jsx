import React from 'react'
import "./Cards.css"
const Cards = ({data}) => {
  return (
    <div className='Cards'>
      <div className='container Cards-container'>
        <ul className='Cards-list'>
            <li className='Cards-item'>
                <h1 className='Cards-title-a'>{data.title_a}</h1>
            </li>
            <li className='Cards-item'>
                <p className='Cards-text-a'>{data.text_a}</p>
                <img className='Cards-img_a' src={data.img_a} alt="rasm" />
            </li>
        </ul>
        <img className='Cards-img_b' src={data.img_b} alt="" />
        <h3 className='Cards-title_b'>{data.title_b}</h3>
        <p className='Cards-text_b'>{data.text_b}</p>
        <button className='Cards-btn'></button>
      </div>
    </div>
  )
}

export default Cards
