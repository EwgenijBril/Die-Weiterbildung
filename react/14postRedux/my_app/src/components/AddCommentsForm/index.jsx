import React from 'react'
import s from './index.module.css';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/reducers/postReducer';


export default function AddCommentsForm({ post_id }) {

    const dispatch = useDispatch();

    const submit = event => {
        event.preventDefault();
        const { comment } = event.target
        dispatch(addComment({
            post_id,
            comment: comment.value
        }));
        comment.value = '';
    }
   
  return (
    <form className={ s.add_comment_form } onSubmit={ submit }>
        <input type="text" name='comment'placeholder='Type your comment'/>
        <button>Add comment</button>
    </form>
  )
}
