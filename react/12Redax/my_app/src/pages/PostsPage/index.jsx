import React from 'react'
import { Link } from 'react-router-dom'
import AddPostForm from '../../components/AddPostForm'
import PostsContainer from '../../components/PostsContainer'

export default function PostsPage() {
  return (
    <div>
      <Link to='/'> <button>Main</button></Link>
      <AddPostForm/>
      <PostsContainer/>
    </div>
  )
}
