import React from 'react'
import Carousel from './Carousel';

export const ItemDetail = ({ itemDetail }) => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      
<div className='container-fluid '>
      <div className='row mt-5'>
        <div className="card carousel col-12 col-md-4 ps-md-5 pe-md-5 mt-md-3" key={itemDetail.id}>
         
       <div className='order-md-3'>  
       <Carousel settings={settings}>
            {itemDetail.imagenes.map(img =>
              <div key={itemDetail.id}><img src={img.url} alt={itemDetail.titulo} className="img-fluid" /></div>
            )}
          </Carousel>
       </div>
       <div>
            <h1 className='mt-1 text-center order-md-1'>{itemDetail.titulo}</h1>
           
          </div>
          <div className='mt-2 mb-2 text-center order-md-2'>
            <p>{new Date(itemDetail.fecha).toISOString().slice(0,10).split('-').reverse().join('-')}</p>
          </div>     
        </div>
        <div className="card pe-3 ps-3 datos mt-3 col-12 col-md-8">
          <div className='instagram' dangerouslySetInnerHTML={{ __html: itemDetail.descripcion }} />
                   
             
  

        </div>
       

      </div>
      </div>
    </>)

}
