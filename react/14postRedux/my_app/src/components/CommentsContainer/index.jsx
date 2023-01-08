import React from 'react'
import Comment from '../Comment'
import AddCommentsForm from '../AddCommentsForm'

export default function CommentsContainer({ comments, post_id }) {
    
  return (
    <div>
        {
            comments.map(el => <Comment key={el.id} {...el} post_id={post_id}/>)
        }
        <AddCommentsForm post_id={post_id}/>    
    </div>
  )
}

