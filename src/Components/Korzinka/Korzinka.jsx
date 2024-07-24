import { useState } from 'react';
import "./Korzinka.css";
import Rasm_1 from "../images/rasm1.png"
import Rasm_2 from "../images/rasm2.png"
import Rasm_3 from "../images/rasm3.png"
import Rasm_4 from "../images/rasm4.png"
import Rasm_5 from "../images/rasm5.png"
import Rasm_6 from "../images/rasm7.png"
import Rasm_7 from "../images/rasm8.png"
import Rasm_8 from "../images/rasm9.png"
import Rasm_9 from "../images/rasm10.png"
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
  };
  const Korzinka1 = {
    img_a: foto_1,
    title_a: "Google Pixel - Black",
    text_a: "5%",
    img_b: foto_1,
    title_b: "Белый, серый, синий",
    text_b: "10 ₽",
    button: "Add To Cart"
  }
  return (
    <div className='korzinka'>
      <h1>Card</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
              <h1>{data}</h1>
              <h2>{item.price}</h2>
              <button disabled={add[item.name]} onClick={() => addCard(item)}>
                {add[item.name] ? "Qushilgan" : "Qushish"}
              </button>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

    </div>
  );
};

export default Korzinka;
