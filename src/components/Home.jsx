import React, { useEffect } from "react";
import Seo from "./Head";
import Proyectos from "./Proyectos";
import { Link } from "react-router-dom";
import Contacto from './Contacto'
import ItemListContainer from "./ItemListContainer";
import Trayectoria from './Trayectoria'

const Home = (props) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      props.handleScrollTo(hash);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <Seo
        title={"La luna en un lapicero"}
        description={"dúo musical, Ceci De Los Santos y Erika Gonzalez"}
        image={`${window.location.origin}/static/media/logo.png`}
        pathSlug={window.location.href}
      />
      <section id="inicio">
        <h1 className="d-none d-md-flex">La luna en un lapicero</h1>
        <h1 className="d-md-none">
          La <br /> luna<br /> en<br /> un<br /> lapicero
        </h1>
        <Link to="#proyectos" className="flecha" onClick={() => props.handleScrollTo("#proyectos")}>
          <i className="bi bi-caret-down"></i>
        </Link>   
      </section>
      <Proyectos handleScrollTo={props.handleScrollTo}/>
      <ItemListContainer handleScrollTo={props.handleScrollTo}/>
      <Trayectoria handleScrollTo={props.handleScrollTo}/>
      <Contacto />
    </>
  );
};

export default Home;
