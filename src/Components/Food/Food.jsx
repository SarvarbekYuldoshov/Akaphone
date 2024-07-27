import React, { useState } from 'react'
import "./Food.css"
import useSharedStore from '../Store/Store';
const Food = () => {
    const { cars, setCars } = useSharedStore();
    const [add, setAdd] = useState({});
  
    const addCard = (item) => {
      setCars([...cars, item]);
      setAdd((prev) => ({ ...prev, [item.name]: true }));
    }
  return (
    <div className='food'>
      <div className='container food-container'>
          
      </div>
    </div>
  )
}
export default Food

