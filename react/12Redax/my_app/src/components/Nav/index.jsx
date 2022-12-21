import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
        <Link to='/'>Main</Link>
        <Link to='/users'>Users</Link>
        <Link to='/posts'>Posts</Link>
    
    </div>
  )
}
