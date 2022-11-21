import React, { useContext } from 'react'
import { Context } from '../../context'
import User from '../../components/User'


export default function TeamsPage() {

  const { users } = useContext(Context);

  return (
    <div>
        {
          users.langth !== 0
          ? users.map(el => <User key={el.id} {...el}/> )
          : 'No users'
        }
    </div>
  )
}
