import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../requests/product'
import s from './index.module.css'

export default function ProductDescrPage() {

    const [ product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProduct( setProduct, id )
    }, []);

    const { title, description, price, images } = product

   

  return (
    <div className={s.product_descr}>
        {
            images && <img src={images[1]} alt={title}/>
        }
        <div className={s.info_blok}>
            <p className={s.title}>{title}</p>
            <p className={s.descr}>{description}</p>
            <p className={s.price}><span>Price: {price}$</span></p>
        </div>
    </div>
  )
}
