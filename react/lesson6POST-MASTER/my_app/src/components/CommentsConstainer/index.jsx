import React from 'react'
import AddCommentsForm from '../AddCommentsForm'
import Comment from '../Comment'


export default function CommentsContainer({comments, post_id}) {
  return (
    <div>
        {
           comments.map(el => <Comment key={el.id} {...el}/>) 
        }
    <   AddCommentsForm post_id={post_id}/>
    </div>
  )
}
