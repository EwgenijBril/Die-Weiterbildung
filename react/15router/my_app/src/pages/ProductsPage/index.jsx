import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ProductsCard from '../../components/ProductsCard';
import { getProducts } from '../../requests/products';
import s from './index.module.css'

export default function ProductsPage() {

  const [ products, setProducts ] = useState([])

  const { category } = useParams();

  useEffect(() => {
    getProducts( category, setProducts );
  }, [])

  return (
    <div className={s.product_page}> 
      {
        products.map(el => <ProductsCard key={el.id} {...el}/>)
      }
    </div>
   
  )

  
}
