import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard'
import { clearCart } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import s from './index.module.css'


export default function CartPage() {

  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart())

 const total = cart.reduce((prev, {price, count}) => prev + price * count, 0)

  return (
    <div>
      {
        cart.length === 0
        ? <p>The cart is emty...</p>
        : <div>
        {
          cart.map(el => <CartCard key={el.id} {...el}/>)
        }
        </div>
      }
        <div className={s.total}>
          <p>Total: {total}</p> 
          <button onClick={clear_cart}>Clear cart</button>
      </div>  
    </div>
  )
}
