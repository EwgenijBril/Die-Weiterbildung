import React from 'react'
import { Link } from 'react-router-dom'
import AddUserForm from '../../components/AddUserForm'
import UserContainer from '../../components/UserContainer'

export default function UserPage() {
  return (
    <div>
        <Link to='/'> <button>Main</button></Link>
        <AddUserForm/>
        <UserContainer/>
    </div>
  )
}
