import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Proyectos = (props) => {
  

  return (
    <>
      
<section id="proyectos">  
<div className="proyecto">
<img src='../../vivo/97.jpg' alt="" className="img-fluid col-12 col-md-6"/>
<Link to="/" className="boton">VIVO</Link>
  
</div>
<div className="proyecto">
<img src='../../la_libreta_de_las_tapas_negras/51.jpg' alt="" className="img-fluid col-12 col-md-6"/>
<Link to="/" className="boton">La libreta de las tapas negras</Link>
  
</div>
  <Link to="#calendario" className="flecha" onClick={() => props.handleScrollTo("#calendario")}>
          <i className="bi bi-caret-down"></i>
</Link> 

  
</section>
    </>
  );
};

export default Proyectos;
