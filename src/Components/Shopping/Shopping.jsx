import React, { useState } from 'react';
import "./Shopping.css";
import useSharedStore from '../Store/Store';

const Shopping = () => {
  const { cars, setCars } = useSharedStore();
  const [count, setCount] = useState({});

  const deleteCars = (id) => {
    const newCars = cars.filter((item) => item.id !== id);
    setCars(newCars);
  };

  const increment = (id) => {
    setCount((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrement = (id) => {
    setCount((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
  };

  return (
    <div className='shopping'>
      <div className='container shopping-shopping'>
        <h1>Qushilgan Aksesuarlar</h1>
        {cars && cars.map((item, index) => (
          <div key={index} className='card1'>
            <h1 className='korzinka-title'>{item.name}</h1>
              <p className='korzinka-text'>{item.text}</p>
              <img className='korzinka-img'src={item.img} alt="" />
              <h2 className='korzinka-title-1'>{item.title}</h2>
              <h4 className='korzinka-title-2'>{item.price}</h4>
            <button className='korzinka-btn-a' onClick={() => decrement(item.id)}>-</button>
            <button className='korzinka-btn-a' onClick={() => increment(item.id)}>+</button>
            <button className='korzinka-btn-b' onClick={() => deleteCars(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
