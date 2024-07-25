import { useState } from 'react';
import "./Korzinka.css";
import Cars from '../Card/Card';
import useSharedStore from '../Store/Store';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rasm_1 from "../images/rasm1.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Korzinka = () => {
  const { cars, setCars } = useSharedStore();
  const [add, setAdd] = useState({});

  const addCard = (item) => {
    setCars([...cars, item]);
    setAdd((prev) => ({ ...prev, [item.name]: true }));
  }
  return (
    <div className='korzinka'>
      <div className='container korzinka-container'>
    
        <h1 className='korzinka-title-one'>Горячие за неделью</h1>
      <Swiper 
        spaceBetween={30}
        slidesPerView={4}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper-card"
      >
        {Cars && Cars.map((item, index) => (
          <SwiperSlide className='card-item' key={index} >
        <img className='korzinka-img-a' src={Rasm_1} alt="" />
            <div className='card1'>
            <Link to={`/detail/${item.id}`}>
              <h1 className='korzinka-title'>{item.name}</h1>
              <p className='korzinka-text'>{item.text}</p>
              <img className='korzinka-img'src={item.img} alt="" />
              <h2 className='korzinka-title-1'>{item.title}</h2>
              <h4 className='korzinka-title-2'>{item.price}</h4>
              </Link>
              <button className='korzinka-btn' disabled={add[item.name]} onClick={() => addCard(item)}>
                {add[item.name] ? "Qushilgan" : "Qushish"}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    </div>
  );
};

export default Korzinka;
