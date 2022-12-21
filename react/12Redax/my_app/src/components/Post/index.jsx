import React from 'react'
import s from './index.module.css'

export default function Post({id, title, description}) {
  return (
    <div className={s.post_card}>
        <h3>Title { title }</h3>
        <p>Description: { description }</p>
    </div>
  )
}
