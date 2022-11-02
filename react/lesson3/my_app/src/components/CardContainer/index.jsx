import React from 'react'
import Card from '../Card'
import s from './index.module.css'

export default function CardContainer({words_array}) {
  return (
    <div className={s.cards_container}>
        {
        words_array.map(el => <Card key={el.id} {...el} />)
        }
    </div>
  )
}
