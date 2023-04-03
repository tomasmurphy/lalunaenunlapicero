import React from 'react'
import Carousel from './Carousel';
import Seo from './Head';

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
      <Seo title={itemDetail.titulo}
        description={itemDetail.precio}
        image={`${itemDetail.imagenes[0].url}`}
        pathSlug={window.location.href}
      />
<div className='container-fluid contenedor'>
      <div className='row mt-5'>
        <div className="card carousel col-12 col-md-6 ps-md-5 pe-md-5 mt-md-3" key={itemDetail.id}>

          <Carousel settings={settings}>
            {itemDetail.imagenes.map(img =>
              <div key={itemDetail.id}><img src={img.url} alt={itemDetail.titulo} className="img-fluid" /></div>
            )}
          </Carousel>
        </div>
        <div className="card pe-3 ps-3 datos mt-3 col-12 col-md-6">
          <div>
            <h1>{itemDetail.titulo}</h1>
           
          </div>
          <div className='mt-3 mb-3'>
            <p>{itemDetail.fecha}</p>
          </div>       
          <div className='' dangerouslySetInnerHTML={{ __html: itemDetail.descripcion }} />
                   
             
  

        </div>
       

      </div>
      </div>
    </>)

}
