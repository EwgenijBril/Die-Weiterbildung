import React from 'react'
import s from './index.module.css'

export default function Comment({ id, comment, post_id}) {
  return (
    <div className={ s.comment_atem}>
        { comment }
    </div>
  )
}
