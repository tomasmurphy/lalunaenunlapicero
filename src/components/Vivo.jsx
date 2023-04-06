import React from "react";
import Carousel from "./Carousel";
import Swal from "sweetalert2";
import icono from "../img/detalle.png";

export const Vivo = () => {
  window.scrollTo(0, 0);
  const handleCompra = () => {
    let deviceType =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "api"
        : "web";

    const whatsapp = `Hola *La luna en un lapicero* 🌕. Quiero comprar un disco!`;
    let linkCompra = `https://${deviceType}.whatsapp.com/send?phone=59897453324&text=${whatsapp}`;
    window.open(linkCompra, "_blank");

    // Muestra el mensaje de agradecimiento
    Swal.fire({
      text: "Gracias por tu compra!",
      iconHtml: `<img src="${icono}" alt="Icono personalizado" width="100"/>`,
      showConfirmButton: true,
      confirmButtonText: "Ta!",
      customClass: {
        icon: "custom-icon-class",
      },
      confirmButtonClass: "btnSweet",
    });
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
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
  const settingsCloro = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <>
      <div id="vivo" className="container-fluid">
        <div className="row vivo">
          <div className="carousel col-12 col-md-12">
            <Carousel settings={settings}>
              <img src="../../vivo/show (1).jpg" alt="" className="img-fluid" />
              <img
                src="../../vivo/show (10).jpg"
                alt=""
                className="img-fluid"
              />
              <img src="../../vivo/show (6).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (7).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (2).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (3).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (8).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (5).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (4).jpg" alt="" className="img-fluid" />
              <img src="../../vivo/show (9).jpg" alt="" className="img-fluid" />
            </Carousel>
          </div>

          <p className="col-12 epigrafe">
            Este disco fue grabado en vivo en el Teatro Solís el 8 de enero de
            2022. Las músicas que elegimos para este espectáculo han inspirado
            el comienzo de nuestra búsqueda musical como dúo.
            <br />
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mediospublicos.uy/dos-talentosas-artistas-asoman-en-la-musica-uruguaya/
"
            >
              PRENSA <i className="bi bi-bookmark"></i>
            </a>
          </p>

          <div className="disco col-12 row">
            <div className="col-md-6 col-12  text-center ">
              <img
                src="../../vivo/tapa.jpg"
                alt="tapa"
                className="tapa col-8 img-fluid"
              />
            </div>
            <div className="textoDisco col-md-6 col-12">
              <h1 className="text-center text-md-start mb-4">Ficha técnica</h1>
              <h2>
                {" "}
                <span className="ficha">Palmas</span> Romina Dogliotti y Lola
                Munaretto
              </h2>
              <h2>
                <span className="ficha">Violín y baile</span> Lucía Gayo
              </h2>
              <h2>
                <span className="ficha">Arte, fotos y clorotipias </span> Laura Basílico
              </h2>
              <h2>
                <span className="ficha">Diseño </span> Carolina González
              </h2>
              <h2>
                <span className="ficha">Grabación, mezcla y mastering</span> Juan Manuela Cola
              </h2>
              <h2>
                <span className="ficha">Sello discográfico</span> Shagrada
                Medra
              </h2>
              <div onClick={handleCompra} className="boton mt-5">
                Comprar <i className="bi bi-whatsapp"></i>
              </div>
            </div>
          </div>

          <div className="col-12 row">
            <img
              src="../../vivo/disco (8).jpeg"
              alt="tapa"
              className="m-0 p-0 col-md-3 col-6 img-fluid"
            />
            <img
              src="../../vivo/disco (9).jpeg"
              alt="tapa"
              className="m-0 p-0 col-md-3 col-6 img-fluid"
            />

            <div className="d-flex col-md-6 col-12 m-0 p-0">
              <div className="medra">
                <p>
                  Shagrada Medra es un sello de producciones musicales
                  independientes en el que fue editado nuestro primer disco
                  “VIVO”.
                </p>
                <p>
                  Queremos invitarles a formar parte de esta comunidad y a
                  conocer los demás proyectos que integran este catálogo.
                </p>
                <p>
                  Aquí encontrarán también las formas de colaborar para que esta
                  iniciativa comunitaria se siga sustentando.
                </p>
                <a
                  href="https://shagradamedra.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botonMedra"
                >
                  Shagrada Medra
                </a>
              </div>
            </div>
          </div>

          <img
            src="../../vivo/disco (3).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />
          <img
            src="../../vivo/disco (2).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />
          <img
            src="../../vivo/disco (4).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />
          <img
            src="../../vivo/disco (1).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />
          <img
            src="../../vivo/disco (10).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />

          <img
            src="../../vivo/disco (7).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />

          <img
            src="../../vivo/disco (11).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />
          <img
            src="../../vivo/disco (5).jpeg"
            alt="tapa"
            className="m-0 p-0 col-md-3 col-6 img-fluid"
          />
        </div>
        <div className="carousel fondoGris col-12 col-md-12">
          <Carousel settings={settingsCloro}>
            <img
              src="../../vivo/t-clorotipias (1).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (2).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (3).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (4).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (5).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (6).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (7).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (8).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (9).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (10).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (15).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (12).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (13).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
            <img
              src="../../vivo/t-clorotipias (14).png"
              alt="tapa"
              className="m-0 p-0  img-fluid"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};
