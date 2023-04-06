import React, {useState, useEffect} from "react";
import Carousel from "./Carousel";
import Loader from "./Loader"

export const Libreta = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    console.log("me cargue")     
    },2000);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
    {isLoading ? <Loader />
    :""}
     <div id="libreta" className={`${isLoading ? "d-none" : "container-fluid"}`}>
        <div className="row libreta">
          <div className="carousel col-12 col-md-6">
            <Carousel settings={settings}>
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (4).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (5).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (7).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (8).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (9).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (3).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (2).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (6).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (1).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (10).jpg"
                alt=""
                className="img-fluid"
              />
              <img
                src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (11).jpg"
                alt=""
                className="img-fluid"
              />
            </Carousel>
          </div>
          <div className="texto col-12 col-md-6">
            <div>
            



              <h1>LA LIBRETA DE LAS TAPAS NEGRAS</h1>
              <p>
              Este proyecto se basa en la selección y re-versión de un repertorio de canciones populares del Río de la Plata, acompañadas y entrelazadas por textos que el poeta uruguayo Sebastián Rivero creó para la ocasión. Es un relato testimonial, poético y musical narrado por un hombre que deja por escrito sus vivencias, canciones y milagros entretejidos con el cancionero popular litoraleño. 
              </p>
              <p>
              “La libreta de las tapas negras” propone un diálogo entre lo tradicional, lo contemporáneo y la curiosidad de los 3 artistas, que fusionan sus universos en un nuevo lenguaje con la memoria colectiva como arcilla fundamental.

              </p>
              
              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://mediospublicos.uy/la-libreta-de-las-tapas-negras-en-la-zavala-muniz/
">
  PRENSA <i className="bi bi-bookmark"></i>
</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
