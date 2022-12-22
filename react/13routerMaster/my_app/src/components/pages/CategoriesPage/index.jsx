import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../../../requests/categories';
import CategoryCard from '../../CategoryCard';

export default function CategoriesPage() {

  const [ categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, [])

  return (
    <div>
      {
       categories.map((el, id) => <CategoryCard key={id} category={el}/>)
      }
    </div>
  )
}
