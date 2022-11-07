import React from 'react'
import logo from './media/buh_one_logo.png'
import s from './index.module.css'

export default function Nav() {
  return (
    <nav className={['wrapper', s.nav_block].join(' ')}>
        <a>
            <img src={logo} alt="logo" />
        </a>
        <ul>
        <li>Главная</li>
        <li>Услуги</li>
        <li>Кейсы</li>
        <li>О компании</li>
        <li>Контакты</li>
        </ul>
    </nav>
  )
}
