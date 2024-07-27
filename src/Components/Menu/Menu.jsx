import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import "./Menu.css"
export default function App() {
  return (
    <>
    <div className='menu'>
        <div className='container  menu-container'>
            <h1 className='menu-title'>Каталог товаров</h1>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="menu-mySwiper"
      >
        <SwiperSlide className='menu-swiper'>
            <img className='menu-img' src="https://aka-phone.netlify.app/images/all_product.jpg" alt=""/>
            <p className='menu-text'>All Products</p>
        </SwiperSlide>
        <SwiperSlide className='menu-swiper'>
            <img className='menu-img' src="	https://aka-phone.netlify.app/images/phone.png" alt=""/>
            <p className='menu-text'>Phone</p>
        </SwiperSlide>
        <SwiperSlide className='menu-swiper'>
            <img className='menu-img' src="https://aka-phone.netlify.app/images/laptop.png" alt=""/>
            <p className='menu-text'>Computer</p>
        </SwiperSlide>
        <SwiperSlide className='menu-swiper'>
            <img className='menu-img' src="	https://aka-phone.netlify.app/images/pffice.png" alt=""/>
            <p className='menu-text'>Office</p>
        </SwiperSlide>
        <SwiperSlide className='menu-swiper'>
            <img className='menu-img' src="	https://aka-phone.netlify.app/images/book.png" alt=""/>
            <p className='menu-text'>Book</p>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
    </>
  );
}
