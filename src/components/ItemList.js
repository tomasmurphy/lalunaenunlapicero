import React from 'react'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

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
               arrows: false,
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
                  <div className='evento' key={item.id}>
                     <Link to={`/detalle/${item.id}`}>
                        <div className="imgMedida">
                           <img src={item.imagenes[0].url} alt={`Foto de ${item.titulo}`} className='img-fluid' />
                           <div className="medida boton">
                              {item.titulo}
                              <br/>
                              {new Date(item.fecha).toISOString().slice(0,10).split('-').reverse().join('-')}
                           </div>
                           
                        </div>
                     </Link>

                  </div>
               )
            }
         </Carousel>
      </>
   )
};