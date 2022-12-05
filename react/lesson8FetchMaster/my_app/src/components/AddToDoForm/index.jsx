import React, { useContext } from 'react'
import { Context } from '../../context';
import s from './index.module.css'
import { addToDos } from '../../reqests/todos';

export default function AddToDoForm() {

    const { createNewToDos } = useContext(Context)

    const submit = event => {
        event.preventDefault();
        const { todo } = event.target;
        addToDos({
          todo: todo.value,
          completed: false,
          userId: 26
        }, createNewToDos);
        todo.value = '';
      }
    
  return (
    <form className={s.add_todo_form} onSubmit={ submit }>
        <input type="text" name='todo' placeholder='Task' />
        <button>add Task</button>
    </form>
  )
}
