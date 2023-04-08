import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Nav(props) {
  const windowWidth = window.innerWidth;

  const [isScrolled, setIsScrolled] = useState(false);

  const pantalla = windowWidth > 768 ? 0.45 : 0.17;

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.pageYOffset;
      if (scrollDistance > window.innerHeight * pantalla) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pantalla]);
  const cualPath = window.location.pathname === "/la_libreta_de_las_tapas_negras/" || window.location.pathname === "/la_libreta_de_las_tapas_negras"
   ? "scrollNegro": "scrollFinal";


  return (
    <nav className={window.location.pathname !== "/" ? cualPath : isScrolled ? "scrollFinal" : "scrollInicial"}
    >
      
      <div className='navbarContainer'>
      <div className={isScrolled ? "d-none d-lg-flex logo" : "d-none"}>
        <Link to="/#inicio" onClick={() => props.handleScrollTo("#inicio")}>
        Cecilia de los Santos y Erika Gonzalez
        </Link>  
      </div>
        <Link to="/#inicio" onClick={() => props.handleScrollTo("#inicio")} className={window.location.hash === "#inicio" ? "active" : ""}>
          {windowWidth > 768 ? "INICIO" : <i className="bi bi-moon"></i>}
        </Link>
        <Link to="/#proyectos" onClick={() => props.handleScrollTo("#proyectos")} className={window.location.hash === "#proyectos" ? "active" : ""}>
          {windowWidth > 768 ? "PROYECTOS" : <i className="bi bi-music-note-beamed"></i>}
        </Link>
        <Link to="/#calendario" onClick={() => props.handleScrollTo("#calendario")} className={window.location.hash === "#calendario" ? "active" : ""}>
          {windowWidth > 768 ? "CALENDARIO" : <i className="bi bi-calendar-check"></i>}
        </Link>
        <Link to="/#trayectoria" onClick={() => props.handleScrollTo("#trayectoria")} className={window.location.hash === "#trayectoria" ? "active" : ""}>
          {windowWidth > 768 ? "TRAYECTORIA" : <i className="bi bi-signpost-2"></i>}
        </Link>
        <Link to="/#contacto" onClick={() => props.handleScrollTo("#contacto")} className={window.location.hash === "#contacto" ? "active" : ""}>
          {windowWidth > 768 ? "CONTACTO" : <i className="bi bi-envelope"></i>}
        </Link>

      </div>
    </nav>

  );
}

export default Nav;

