import React, { useContext } from 'react'
import User from '../User'
import { Context } from '../../context'


export default function UserContainer() {

    const {users} = useContext(Context)
  return (
    <div>
        {
            users.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
