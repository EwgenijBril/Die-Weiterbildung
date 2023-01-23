import React from 'react'
import s from './index.module.css'

export default function ProductCard({id, title,price}) {
  return (
    <div className={s.product_card}>
        <p>{ title }</p>
        <p>{ price }</p>
        <button>Add to cart</button>
    </div>
  )
}
