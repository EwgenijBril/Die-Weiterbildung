import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { incrementCount, decrementCount } from '../../store/reducers/cart'


export default function CartCard({id, image, title, price, count}) {

  const dispatch = useDispatch();

  const increment_count = () => dispatch(incrementCount(id))
  const decrement_count = () => dispatch(decrementCount(id))

  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>Title:{ title }</p>
        <p>{ price } x { count } = { price * count }</p>
        <div className={s.triggers}>
          <button onClick={increment_count}>+</button>
          <button onClick={decrement_count}>-</button> 
        </div>
        
    </div>
  )
}
