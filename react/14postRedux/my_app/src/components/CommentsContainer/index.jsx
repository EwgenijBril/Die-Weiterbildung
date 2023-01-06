import React from 'react'
import AddCommentsForm from '../AddCommentsForm'
import Comment from '../Comment'

export default function CommentsContainer({ comments }) {
  return (
    <div>
        {
            comments.map(el => <Comment key={el.id} {...el}/>)
        }
        <AddCommentsForm/>    
    </div>
  )
}
