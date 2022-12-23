import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../../../requests/categories';
import CategoryCard from '../../CategoryCard';
import s from './index.module.css'

export default function CategoriesPage() {

  const [ categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, [])

  return (
    <div className={s.categories_page}>
      {
        categories.length === 0
        ? <p>Categories are loading...</p>
        : <div >
           {
              categories.map((el, index) => <CategoryCard key={index} category={el}/>)
           }
          </div>
      }
    </div>

  )
}
