import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <Link to='/categories'>Categories</Link>
        <Link to='cart'>Cart</Link>
    
    </div>
  )
}
