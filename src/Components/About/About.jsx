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
        <div className='container about-container'>
            <ul className='about-list'>
               <h1 className='about-title'>Смартфоны и гаджеты для близких и друзей по доступной цене</h1>
               <p className='about-text'>В нашем магазине вы сможете найти качествунную продукцию по досутпным ценам для вашего близкого человека</p>
               <button className='about-btn'>Посмотреть каталог</button>
            </ul>
            <ul className='about-list'>
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
          <img src="https://aka-phone.netlify.app/images/smart_watch.png" />
          <h2 className='about-title-a'>Смарт часы AmazFit </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://aka-phone.netlify.app/images/smart_watch.png" />
          <h2 className='about-title-a'>Смарт часы AmazFit </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://aka-phone.netlify.app/images/smart_watch.png" />
          <h2 className='about-title-a'>Смарт часы AmazFit </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://aka-phone.netlify.app/images/smart_watch.png" />
          <h2 className='about-title-a'>Смарт часы AmazFit </h2>
        </SwiperSlide>
      </Swiper>
            </ul>
        </div>
    </div>
    </>
  );
}