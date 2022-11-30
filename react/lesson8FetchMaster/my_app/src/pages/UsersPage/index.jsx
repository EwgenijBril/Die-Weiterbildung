import React from 'react'
import { Link } from 'react-router-dom'
import UsersContainer from '../../components/UsersContainer'

export default function UserPage() {
  return (
    <div>
         <Link to='/'>
            <button>Main page</button>
        </Link>

        <UsersContainer/>
    </div>
  )
}
