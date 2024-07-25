import { useState } from 'react';
import "./Menu.css";
import Cars from '../Card/Card';
import useSharedStore from '../Store/Store';
const Korzinka = () => {
  const { cars, setCars } = useSharedStore();
  const [add, setAdd] = useState({});

  const addCard = (item) => {
    setCars([...cars, item]);
    setAdd((prev) => ({ ...prev, [item.name]: true }));
  }
  return (
    <div className='menu'>
      <div className='container menu-container'>
        <h1 className='menu-title-one'>Горячие за неделью</h1>
        {Cars && Cars.map((item, index) => ( key={index} >
            <div className='card1'>
              <h1 className='menu-title'>{item.name}</h1>
              <h2 className='menu-title_a'>{item.price}</h2>
              <h3 className='menu-title_b'>{item.img}</h3>
              <h4 className='menu-title_c'>{item.img}</h4>
              <h4 className='menu-title_d'>{item.title}</h4>
              <h4 className='menu-title_e'>{item.text}</h4>
              <button className='menu-btn' disabled={add[item.name]} onClick={() => addCard(item)}>
                {add[item.name] ? "Qushilgan" : "Qushish"}
              </button>
            </div>
        ))}
    </div>
    </div>
  );
};

export default Menu;
