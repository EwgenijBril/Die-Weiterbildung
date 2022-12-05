import React from 'react'
import s from './index.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Product({title, price, description}) {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={s.product_card}>
      <div>
        <Slider {...settings}>
          <div>
            <img src={images[0]} alt='img1' />
          </div>
          <div>
            <img src={images[1]} alt='img2' />
          </div>
          <div>
            <img src={images[2]} alt='img3'/>
          </div>
          <div>
            <img src={images=[3]} />
          </div>
        </Slider>
        </div>
        
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Description: {description}</p>
    </div>
  )
}
