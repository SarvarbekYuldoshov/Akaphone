import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import "./About.css"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='about'>
        <div className='container about-cotainer'>
            <ul className='about-list'>
               <h1 className='about-title'>Смартфоны и гаджеты для близких и друзей по доступной цене</h1>
               <p className='about-text'>Смартфоны и гаджеты для близких и друзей по доступной цене</p>
               <button className='about-btn'>Посмотреть каталог</button>
            </ul>
            <ul className='about-list'>
                
            </ul>
        </div>
    </div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}