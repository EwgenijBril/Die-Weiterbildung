import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cartReducer'

export default function ProductCard({id, title,price}) {

    const dispatch = useDispatch();
    const add_to_cart = () => dispatch(addToCart({ id, title, price }));

  return (
    <div className={s.product_card}>
        <p>{ title }</p>
        <p>{ price }</p>
        <button onClick={add_to_cart}>Add to cart</button>
    </div>
  )
}
