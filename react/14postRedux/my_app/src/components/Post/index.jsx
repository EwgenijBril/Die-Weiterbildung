import React from 'react'
import s from './index.module.css'
import { CloseCircleOutlined } from '@ant-design/icons'
import CommentsContainer from '../CommentsContainer'
import { useDispatch } from 'react-redux'
import { changeLike } from '../../store/reducers/postReducer'

export default function Post({id, title, text, like, comments, delete_post}) {

  const dispatch = useDispatch();

  const change_like = id => dispatch(changeLike(id))

  const like_text = like ? 'Liked' : 'Like'

  const like_style = [s.like_btn, like ? s.like_btn_active : ''].join(' ');

  

  return (
    <div className={s.post_item} >
        <CloseCircleOutlined className={s.cross_icon} onClick={() => delete_post(id)}/>
        <p>Title: {title} </p>
        <p>Text: {text} </p>
        <p className={like_style} onClick={() => change_like(id)}> {like_text} </p>
        <CommentsContainer comments={ comments } post_id={id}/>
    </div>
  )
}
