import React from 'react'
import s from './index.module.css'

export default function ProductsCard({ title, description, price, images }) {


  return (
    <div className={s.product_card}>  
        <img src={images[3]} alt={title} /> 
        <div className={s.descr_block}>
            <h3> {title} </h3>
            <p>Description: {description} </p>
            <p>Price: {price}$ </p>
        </div>
    </div>
  )
}
