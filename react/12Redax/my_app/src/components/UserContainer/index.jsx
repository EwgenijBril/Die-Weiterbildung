import React from 'react'
import  User  from '../User'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/reducers/userReducer';


export default function UserContainer() {

    const state = useSelector(state => state.user);

    const dispatch = useDispatch();

    const delete_user = id => dispatch(deleteUser(id))

    
  return (
    <div>
        {
            state.map(el => <User key={el.id} {...el} delete_user={delete_user}/>)
        }
    </div>
  )
}
