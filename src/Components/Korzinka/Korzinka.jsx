import { useState } from 'react';
import "./Korzinka.css";
import Cars from '../Card/Card';
import useSharedStore from '../Store/Store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

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
      <Swiper id='swiper'
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
            <div className='card1'>
              <h1 className='korzinka-title'>{item.name}</h1>
              <h2 className='korzinka-title_a'>{item.price}</h2>
              <h3 className='korzinka-title_b'>{item.img}</h3>
              <h4 className='korzinka-title_c'>{item.img}</h4>
              <h4 className='korzinka-title_d'>{item.title}</h4>
              <h4 className='korzinka-title_e'>{item.text}</h4>
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
