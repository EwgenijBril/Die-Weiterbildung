import React from 'react'
import Nav from '../Nav'
import Button from '../Button'
import logo from './media/logo_pic.png'
import s from './index.module.css'
import { BsGlobe2 } from 'react-icons/bs'


export default function Header() {
  return (
    <header className={s.main_header}>
        <div >
        <Nav/>
        <img src={logo} alt="logo" />
        <p>Sales:<br/>+1 (800) 315-5939</p>
        <div className={s.info_block}>
            <BsGlobe2 className={s.glob_icon}/>
            <p>Search:</p>
            <p>Log in:</p>
        </div>
        <Button>Sign up</Button>
        </div>
    </header>
  )
}
