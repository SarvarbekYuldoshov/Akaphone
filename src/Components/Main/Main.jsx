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
        img1:Rasm_7,
        title:"Lenovo IdeaPad L340",
        text:"10%",
        price:"80 ₽",
        button:"Add To Cart "
    }
    const Data2 = {
        img:Rasm_2,
        img1:Rasm_7,
        title:"HyperX Cloud Stinger",
        text:"5%",
        price:"2 ₽",
        button:"Add To Cart "
    }
    const Data3 = {
        img:Rasm_3,
        img1:Rasm_7,
        title:"Xiaomi Mi Band 3",
        text:"10%",
        price:"11 ₽",
        button:"Add To Cart "
    }
    const Data4 = {
        img:Rasm_4,
        img1:Rasm_7,
        title:"Кресло INDI CA-1613A-1",
        text:"5 %",
        price:"5 ₽",
        button:"Add To Cart "
    }
    const Data5 = {
        img:Rasm_5,
        img1:Rasm_7,
        title:"Galaxy Tab S6",
        text:"10%",
        price:"25 ₽",
        button:"Add To Cart "
    }
    const Data6 = {
        img:Rasm_6,
        img1:Rasm_7,
        title:"Holitic Change",
        text:"10%",
        price:"8 ₽",
        button:"Add To Cart "
    }
  return (
    <div className='main'>
        <div className='container main-container'>
            <div className='navbar'>
                <div className='navbar-conntainer'>
                    <div className='layout'>
                        <div className='Cards1'>
                            <div className='container Cards1-container'>
                                <ul className='Cards1-list'>
                                    <img className='Cards-img' src={Data1.img}  alt="" /> 
                                </ul>
                                <ul className='Cards1-list'>
                                    <h1 className='Cards1-title'>{Data1.title}</h1>
                                    <img className='Cards1-img-a' src={Data1.img1} alt="" />
                                    <p className='Cards1-text'>{Data1.text}</p>
                                    <span className='Cards1-span'>{Data1.price}</span>
                                    <br/>
                                    <button className='Cards1-btn'>{Data1.button}</button>
                                </ul>
                            </div>
                        </div>
                    <div className='Cards2'>
                        <div className='container Cards2-container'>
                                <img className='Cards-img' src={Data2.img}  alt="" />
                                <h1 className='Cards-title'>{Data2.title}</h1>
                                <img className='Cards-img-a' src={Data2.img1} alt="" />
                                <p className='Cards-text'>{Data2.text}</p>
                                <span className='Cards-span'>{Data2.price}</span>
                                <button className='Cards-btn'>{Data2.button}</button>
                        </div>
                    </div>
                   <div className='Cards3'>
                        <div className='container Cards3-container'>
                               <img className='Cards-img' src={Data3.img}  alt="" />
                               <h1 className='Cards-title'>{Data3.title}</h1>
                               <img className='Cards-img-a' src={Data3.img1} alt="" />
                               <p className='Cards-text'>{Data3.text}</p>
                               <span className='Cards-span'>{Data3.price}</span>
                               <button className='Cards-btn'>{Data3.button}</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className='Cards4'>
                    <div className='container Cards4-container'>
                        <img className='Cards-img' src={Data4.img}  alt="" />
                        <h1 className='Cards-title'>{Data4.title}</h1>
                        <img className='Cards-img-a' src={Data4.img1} alt="" />
                        <p className='Cards-text'>{Data4.text}</p>
                        <span className='Cards-span'>{Data4.price}</span>
                       <button className='Cards-btn'>{Data4.button}</button>
                    </div>
               </div>
               <div className='Cards5'>
                    <div className='container Cards5-container'>
                        <img className='Cards-img' src={Data5.img}  alt="" />
                        <h1 className='Cards-title'>{Data5.title}</h1>
                        <img className='Cards-img-a' src={Data5.img1} alt="" />
                        <p className='Cards-text'>{Data5.text}</p>
                        <span className='Cards-span'>{Data5.price}</span>
                       <button className='Cards-btn'>{Data5.button}</button>
                    </div>
               </div>
               <div className='Cards6'>
                    <div className='container Cards6-container'>
                        <img className='Cards-img' src={Data6.img}  alt="" />
                        <h1 className='Cards-title'>{Data6.title}</h1>
                        <img className='Cards-img-a' src={Data6.img1} alt="" />
                        <p className='Cards-text'>{Data6.text}</p>
                        <span className='Cards-span'>{Data6.price}</span>
                       <button className='Cards-btn'>{Data6.button}</button>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}
import "./Main.css"
import Cards from '../Cards/Cards'
export default Main
