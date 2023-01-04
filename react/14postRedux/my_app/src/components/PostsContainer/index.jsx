import React from 'react'
import Post from '../Post'
import { useSelector } from 'react-redux'

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
