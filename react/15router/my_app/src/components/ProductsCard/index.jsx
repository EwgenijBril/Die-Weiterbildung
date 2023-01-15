import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function ProductsCard({id, title, description, price, images }) {

  return (
    <Link className={s.product_card} to={`/products/${id}`}>  
        <img src={images[3]} alt={title} /> 
        <div className={s.descr_block}>
            <h3> {title} </h3>
            <p>Description: {description} </p>
            <p>Price: {price}$ </p>
        </div>
    </Link>
  )
}
