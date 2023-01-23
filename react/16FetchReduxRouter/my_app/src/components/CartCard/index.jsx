import React from 'react'
import s from './index.module.css'

export default function CartCard({image, title}) {
  return (
    <div className={s.cart_card}>
        <p>Image:{image}</p>
        <p>Title:{title}</p>
        <button>+</button>
        <button>-</button>
        <div>
           <p>Total:</p> 
           <button>Clear cart</button>
        </div>
        
    </div>
  )
}
