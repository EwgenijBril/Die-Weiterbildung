import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../../requests/products';
import ProductCard from '../../ProductCard';
import s from './index.module.css'

export default function ProductsPage() {

    const [ products, setProducts ] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        getProducts(category, setProducts );
    }, [])

  return (
    <div className={s.product_page}>
        {
            products.map(el => <ProductCard key={el.id} {...el}/>)
        }
    </div>
  )
}
