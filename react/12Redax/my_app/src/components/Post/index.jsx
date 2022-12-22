import React from 'react'
import s from './index.module.css'

export default function Post({id, title, description, delete_post}) {
  return (
    <div className={s.post_card} onClick={() => delete_post(id) }>
        <p className={s.cross_icon}>X</p>
        <h3>Title { title }</h3>
        <p>Description: { description }</p>
    </div>
  )
}
