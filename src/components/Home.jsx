import React, { useLayoutEffect } from "react";
import Proyectos from "./Proyectos";
import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import ItemListContainer from "./ItemListContainer";
import Trayectoria from "./Trayectoria";
import ModalesPromo from './ModalesPromo'
// import Loader from "./Loader";

const Home = (props) => {
  // const [isLoading, setIsLoading] = useState(true);

  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   console.log("me cargue")     
  //   },2000);
  // }, []);

  useLayoutEffect(() => {
    const handleLoad = () => {
      const hash = window.location.hash;
      if (hash) {
        props.handleScrollTo(hash);
      }
    };

    const timeoutId = setTimeout(() => {
      handleLoad();
    }, 100);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {/* {isLoading ? <Loader />:""} */}
    <>
      <section id="inicio">
        <ModalesPromo nombre={"eri"} />

        <ModalesPromo nombre={"ceci"} />
        
        <Link
          to="#proyectos"
          className="flecha"
          onClick={() => props.handleScrollTo("#proyectos")}
        >
          <i className="bi bi-caret-down"></i>
        </Link>
      </section>

      <Proyectos handleScrollTo={props.handleScrollTo} />

      <ItemListContainer handleScrollTo={props.handleScrollTo} />

      <Trayectoria handleScrollTo={props.handleScrollTo} />

      <Contacto />
  </>
  
    </>
  );
};

export default Home;
