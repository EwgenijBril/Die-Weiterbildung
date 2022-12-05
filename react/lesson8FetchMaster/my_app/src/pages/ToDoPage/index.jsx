import React from 'react'
import { Link } from 'react-router-dom'
import ToDoContainer from '../../components/ToDoContainer'
import AddToDoForm from '../../components/AddToDoForm'

export default function ToDoPage() {
  return (
    <div>
        <Link to='/'>
            <button>Main page</button>
        </Link>
        <AddToDoForm/>
        <ToDoContainer/>
    </div>
  )
}
