import React from 'react'

export default function AddCommentsForm() {

  const submit = event => {
    event.preventDefault();
    const { comment } = event.target;
    console.log(comment.value);
    comment.value = ''
  }


  return (
    <form onSubmit={submit}>
      <input type="text" name='comment' placeholder='Type your comment' />
      <button>Add comment</button>
    </form>
  )
}


//10. Создать компонет AddCommentForm, импортировать его в CommentsContainer.
//11. Научить форму собирать данные при отправке и выводить их в консоль
