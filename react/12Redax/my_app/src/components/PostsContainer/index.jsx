import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../Post'


export default function PostsContainer() {

    const state = useSelector(state => state.post)

  return (
    <div>
        {
            state.map(el => <Post key={el.id} {...el}/>)
        }
    </div>
  )
}
