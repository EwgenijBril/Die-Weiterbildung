import React from 'react'
import s from './index.module.css'

export default function AddCommentsForm() {
  return (
    <form className={ s.add_comment_form }>
        <input type="text" name='comment'placeholder='Type your comment'/>
        <button>Add comment</button>
    </form>
  )
}
