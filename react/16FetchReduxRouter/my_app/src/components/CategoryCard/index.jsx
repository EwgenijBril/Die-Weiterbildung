import React from 'react'
import s from './index.module.css'

export default function CategoryCard({ category }) {

    const category_up = category[0].toUpperCase() + category.slice(1);

  return (
    <div className={s.category_card}>
        { category_up }
    </div>
  )
}
