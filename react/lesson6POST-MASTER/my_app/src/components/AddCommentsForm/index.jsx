import React, {useContext} from 'react'
import s from './index.module.css'
import {Context} from '../../context'


export default function AddCommentsForm({post_id}) {

  const {add_comment} = useContext(Context)

  const submit = event => {
    event.preventDefault();
    const { comment } = event.target;
    add_comment( post_id, comment.value);
    comment.value = '';
  }


  return (
    <form onSubmit={submit} className={s.add_comment_form} >
      <input type="text" name='comment' placeholder='Type your comment' />
      <button>Add comment</button>
    </form>
  )
}


//10. Создать компонет AddCommentForm, импортировать его в CommentsContainer.
//11. Научить форму собирать данные при отправке и выводить их в консоль
