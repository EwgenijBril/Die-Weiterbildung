import React from 'react'
import s from './index.module.css'

export default function User({id, name, email,role, avatar}) {
  return (
    <div className={s.user_card}>
        <p>ID: {id} </p>
        <p>Name: {name} </p>
        <p>Email: {email} </p>
        <p>Role: {role} </p>
        <img src={avatar} alt="foto" />
    </div>
  )
}
