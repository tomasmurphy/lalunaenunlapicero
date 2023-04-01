import React from 'react'
import { Item } from './Item'
import Carousel from './Carousel';

export const ItemList = ({ items }) => {
   const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 678,
          settings: {
            slidesToShow: 1,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    };

   return (
      <>
             <Carousel settings={settings}>
 
         {
         
            items.map(item =>
               <div key={item.id} className='xzy'>
               <Item
               
                  id={item.id}
                  imagenes={item.imagenes}
                  titulo={item.titulo}
                  fecha={item.fecha}
                  />
                  </div>
            )
         }
         </Carousel>
      </>
   )
};