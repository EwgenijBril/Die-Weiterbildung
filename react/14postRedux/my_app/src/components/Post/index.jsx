import React from 'react'
import s from './index.module.css'
import { CloseCircleOutlined } from '@ant-design/icons'

export default function Post({id, title, text, like, comments, delete_post}) {
  return (
    <div className={s.post_item} >
        <CloseCircleOutlined className={s.cross_icon} onClick={() => delete_post(id)}/>
        <p>Title: {title} </p>
        <p>Text: {text} </p>
    </div>
  )
}
