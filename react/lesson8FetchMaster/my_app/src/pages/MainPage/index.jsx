import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
        <Link to='products_page'>
            <button>Products</button>
        </Link>

        <Link to='users_page'>
            <button>Users</button>
        </Link>
        <Link to='/todos'>
            <button>To do list</button>
        </Link>
    </div>
  )
}
