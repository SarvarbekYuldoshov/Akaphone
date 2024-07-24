import { useState } from 'react'
import "./Korzinka.css"
import Cars from '../Card/Card'
import useSharedStore from '../Store/Store'
const Korzinka = () => {
  const { cars: setCars } = useSharedStore();
  const [add, setAdd] = useState({})

  const addCard = (item) => {
    setCars([...Cars, item])
    setAdd((prev) => ({ ...prev, [item.name]: true }))
    // const newCars = Cars.filter((car)=>item.id == id)
    // if(newCars.length==0){
    //   setCars([...Cars,item])
    // }
    // setCars(newCars)
  }
  return (
    <div className='korzinka'>
      <h1>Cars</h1>
      {
        Cars && Cars.map((item, index) => (
          <div key={index} className='card1'>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <button disabled={add[item.name]} onClick={() => addCard(item)}>{add[item.name] ? "Qushilgan" : "Qushsish"}</button>
          </div>
        ))
      }
    </div>
  )
}

export default Korzinka
