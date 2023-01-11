import React from 'react'
import Comment from '../Comment'
import AddCommentsForm from '../AddCommentsForm'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/reducers/postReducer';

export default function CommentsContainer({ comments, post_id }) {

  const dispatch = useDispatch();

  const delete_comment = (post_id, id)  => dispatch(deleteComment({post_id: post_id, 
    comment_id: id
  }));
 
  return (
    <div>
        {
          comments.map(el => <Comment key={el.id} {...el} post_id={post_id} delete_comment={delete_comment}/>)
        }
        <AddCommentsForm post_id={post_id}/>    
    </div>
  )
}

