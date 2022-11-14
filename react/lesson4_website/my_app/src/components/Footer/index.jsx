import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
   <footer className={['wrapper', s.footer].join(' ')}>
        <p>2019 (с) все права защищеныю БухОне.ru</p>
        <p>Разработано: BuhOne</p>
   </footer>
  )
}
