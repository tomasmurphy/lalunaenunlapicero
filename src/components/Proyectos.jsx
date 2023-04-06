import React from "react";
import { Link } from "react-router-dom";

const Proyectos = (props) => {
  return (
    <>
      <section id="proyectos">
        <div className="proyecto">
          <img
            src="../../vivo/show (6).jpg"
            alt=""
            className="img-fluid col-12 col-md-6"
          />
          <Link to="/vivo" className="boton" >
            VIVO
          </Link>
        </div>
        <div className="proyecto">
          <img
            src="../../la_libreta_de_las_tapas_negras/la_libreta_de_las_tapas_negras (3).jpg"
            alt=""
            className="img-fluid col-12 col-md-6"
          />
          <Link 
          to="la_libreta_de_las_tapas_negras" className="boton">
            La libreta de las tapas negras
          </Link>
        </div>
        <Link
          to="#calendario"
          className="flecha"
          onClick={() => props.handleScrollTo("#calendario")}
        >
          <i className="bi bi-caret-down"></i>
        </Link>
      </section>
    </>
  );
};

export default Proyectos;
