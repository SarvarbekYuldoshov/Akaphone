import React, { useRef, useState } from 'react';
import  "./About.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

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
        <ul className='about-list'></ul>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='about-img' src="https://aka-phone.netlify.app/images/smart_watch.png" alt="" />
          <h1 className='about-title-a'>Смарт часы AmazFit </h1>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
    </>
  );
}