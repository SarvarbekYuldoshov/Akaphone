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
        <h1>Qushilgan mashinalar</h1>
        {cars && cars.map((item, index) => (
          <div key={index} className='card1'>
            <h3>{item.name}</h3>
            <h5>{count[item.id]}</h5>
            <button onClick={() => decrement(item.id)}>-</button>
            <button onClick={() => increment(item.id)}>+</button>
            <button onClick={() => deleteCars(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
