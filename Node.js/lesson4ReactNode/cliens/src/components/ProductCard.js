import React from 'react'

export default function ProductCard({ mobile, color, quantity}) {
  return (
    <div>
        <p>Title: {mobile}</p>
        <p>Color: {color}</p>
        <p>Quantity: {quantity}</p>
    </div>
  )
}
