import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategoriesImages } from '../../requests/categories_image';

export default function CategoryCard({ category }) {

  //const category_up = category[0].toUpperCase() + category.slice(1);
  // Увеличить первую(заглавную) букву текста.

  const [ images, setImages ] = useState([]);

  useEffect(() => {
    getCategoriesImages(setImages, category)
}, []);


  return (
    <Link  className={s.category_card} to={ category }>
      <img src={images[1]} alt={category} />
        { category }
    </Link>
   
  )
}
