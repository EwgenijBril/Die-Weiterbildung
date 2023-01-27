import React from 'react'
import s from './index.module.css'


export default function CartCard({id, image, title, price, count}) {

  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>Title:{ title }</p>
        <p>{ price } x { count } = { price * count }</p>
        <div className={s.triggers}>
          <button>+</button>
          <button>-</button> 
        </div>
        
    </div>
  )
}
