import React from 'react'
import "./Cards.css"
import Rasm_1 from "../images/rasm1.png"
import Rasm_2 from "../images/rasm2.png"
const Cards = () => {
  return (
    <div className='Cards'>
      <div className='container Cards-container'>
        <ul className='Cards-list'>
            <li className='Cards-item'>
                <h1 className='Cards-title'>Google Pixel - Black</h1>
            </li>
            <li className='Cards-item'>
                <p className='Cards-text'>5%</p>
                <img className='Cards-img' src={Rasm_1} alt="rasm" />
            </li>
        </ul>
        <img src={Rasm_2} alt="" />
        <h3 className='Cards-title-a'></h3>
        <p className='Cards-text-a'></p>
        <button className='Cards-btn'></button>
      </div>
    </div>
  )
}

export default Cards
