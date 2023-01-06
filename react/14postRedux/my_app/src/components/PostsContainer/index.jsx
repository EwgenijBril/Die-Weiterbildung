import React from 'react'
import Post from '../Post'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../../store/reducers/postReducer'

export default function PostsContainer() {

    const state = useSelector(state => state.post);

    const dispatch = useDispatch();

    const delete_post = id => dispatch(deletePost(id));

  return (
    <div>
        {
            state.map(el => <Post key={el.id} {...el} delete_post={delete_post}/>)
        }
    </div>
  )
}
