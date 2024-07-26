import React from 'react'
import "./Main.css"
import Rasm_1 from "../images/rasm11.png"
import Rasm_2 from "../images/rasm12.png"
import Rasm_3 from "../images/rasm13.png"
import Rasm_4 from "../images/rasm14.png"
import Rasm_5 from "../images/rasm15.png"
import Rasm_6 from "../images/rasm16.png"
import Rasm_7 from "../images/rasm1.png"
const Main = () => {
    const Data1 = {
        img:Rasm_1,
        img:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
    const Data2 = {
        img:Rasm_2,
        img:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
    const Data3 = {
        img:Rasm_3,
        img:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
    const Data4 = {
        img:Rasm_4,
        img:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
    const Data5 = {
        img:Rasm_5,
        img:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
    const Data6 = {
        img:Rasm_6,
        img:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
  return (
    <div className='main'>
      <div className='container main-container'>
        <div className='navbar'>
          <Cards data={Data1}/>
          <Cards data={Data2}/>
          <Cards data={Data3}/>
          <Cards data={Data4}/>
          <Cards data={Data5}/>
          <Cards data={Data6}/>
        </div>
      </div>
    </div>
  )
}
import "./Main.css"
export default Main
