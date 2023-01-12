import React from 'react'

export default function ProductsCard({ title, description, price, image }) {
  return (
    <div>
        <img src={image} alt={title} />
        <div>
            <h3> {title} </h3>
            <p>Description: {description} </p>
            <p>Price: {price} </p>
        </div>
    </div>
  )
}
