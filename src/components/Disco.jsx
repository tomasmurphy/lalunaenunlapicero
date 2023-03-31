import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Disco = (props) => {
  

  return (
    <>
      
<section id="disco">  
  <h1 className="d-none d-md-flex"> La luna en un lapicero </h1>
  <h1 className="d-md-none"> La <br /> luna<br /> en<br /> un<br /> lapicero </h1>
  <Link to="#contacto" className="flecha" onClick={() => props.handleScrollTo("#contacto")}>
          <i className="bi bi-caret-down"></i>
        </Link> 

  
</section>
    </>
  );
};

export default Disco;
