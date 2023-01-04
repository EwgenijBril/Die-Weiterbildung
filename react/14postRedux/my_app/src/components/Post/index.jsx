import React from 'react'
import s from './index.module.css'

export default function Post({id, title, text, like, comments}) {
  return (
    <div className={s.post_item}>
        <p>Title: {title} </p>
        <p>Text: {text} </p>

    </div>
  )
}
