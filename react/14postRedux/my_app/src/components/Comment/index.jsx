import React from 'react'
import s from './index.module.css'

export default function Comment({ id, comment, post_id,delete_comment}) {

  return (
    <div className={ s.comment_atem} onClick={() => delete_comment(post_id, id)}>
        { comment }
    </div>
  )
}
