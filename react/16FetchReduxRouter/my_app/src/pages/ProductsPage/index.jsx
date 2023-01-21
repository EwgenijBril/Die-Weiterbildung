import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { load_products } from '../../requests/products_req';
import ProductCard from '../../components/ProductCard';


export default function ProductsPage() {

    const { category } = useParams();
    const category_up = category[0].toUpperCase() + category.slice(1)

    const dispatch = useDispatch();
    const products = useSelector( state => state.products );

    useEffect(() => {
      dispatch( load_products( category ))
    }, [])

  return (
    <div>
      <p>{category_up}</p>
      <div>
        {
          products.map(el => <ProductCard key={el.id} {...el}/> )
        }
      </div>
    </div>
  )
}
