import React, { useLayoutEffect } from "react";
import Seo from "./Head";
import Proyectos from "./Proyectos";
import { Link } from "react-router-dom";
import Contacto from './Contacto'
import ItemListContainer from "./ItemListContainer";
import Trayectoria from './Trayectoria'

const Home = (props) => {

  useLayoutEffect(() => {
    const handleLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        props.handleScrollTo(hash);
      }
    };
  
    const timeoutId = setTimeout(() => {
      handleLoad();
    }, 100); // espera 2 segundos antes de ejecutar handleLoad()
  
    return () => clearTimeout(timeoutId);
    
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
        <h1 className="eri d-none d-md-flex">Erika Gonzales</h1>
        <h1 className="eri d-md-none">
          Erika Gonzales
        </h1>
        <h1 className="ceci d-none d-md-flex">Cecilia de los Santos</h1>
        <h1 className="ceci d-md-none">
        Cecilia de los Santos
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
