import React from 'react'
import s from './index.module.css'

export default function CategoryCard({category}) {
  return (
    <div className={s.form_card}>
      <p> { category }</p>
    </div>
  )
}
