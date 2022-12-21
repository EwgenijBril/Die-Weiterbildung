import React from 'react'
import  User  from '../User'
import { useSelector } from 'react-redux';


export default function UserContainer() {

    const state = useSelector(state => state.user);
    
  return (
    <div>
        {
            state.map(el => <User key={el.id} {...el}/>)
        }
    </div>
  )
}
