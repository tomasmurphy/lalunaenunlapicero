import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";


function Nav(props) {
  const windowWidth = window.innerWidth;


  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.pageYOffset;
      if (scrollDistance > window.innerHeight * 0.45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "scrollFinal" : "scrollInicial"}>
      <h1 className={isScrolled ? "d-none d-md-flex" : "d-none"}>
        La luna en un lapicero
      </h1>
      <div className='navbarContainer'>

        <Link to="/#inicio" onClick={() => props.handleScrollTo("#inicio")} className={window.location.hash === "#inicio" ? "active" : ""}>
          {windowWidth > 768 ? "INICIO" : <i className="bi bi-moon"></i>}
        </Link>
        <Link to="/#proyectos" onClick={() => props.handleScrollTo("#proyectos")} className={window.location.hash === "#disco" ? "active" : ""}>
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

