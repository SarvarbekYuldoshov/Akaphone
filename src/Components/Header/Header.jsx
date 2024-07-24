import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className='container header-container'>
        <ul className='header-list'>
            <li className='header-item'>
                <img src="https://aka-phone.netlify.app/images/logo.svg" alt="" />
            </li>
            <li className='header-item'>
                <h1 className='header-title'>AkaPhone</h1>
                <p className='header-text'>Качестенное по доступное цену</p>
            </li>
        </ul>
        <ul className='header-list'>
            <li className='header-item'><a className='header-link' href="#">Скидки</a></li>
            <li className='header-item'><a className='header-link' href="#">Специальные предложения</a></li>
            <li className='header-item'><a className='header-link' href="#">Каталог товаров</a></li>
        </ul>
        <ul className='header-list'>
            <li className='header-list'>
                <li className='header-item'>
                    <h2 className='header-title-a'>+998(90) 225 - 19 - 97</h2>
                    <button className='header-btn'>Заказать звонок</button>
                </li>
                <li className='header-item'>
                    <Link className='header-link-a' to='/shopping'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></Link>
                </li>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
