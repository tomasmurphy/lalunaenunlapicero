import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Trayectoria = (props) => {
  

  return (
    <>
      
<section id="trayectoria">
  <div className="container-fluid">
    <div className="row align-items-center">
<div className="p-md-5 p-3 col-12 col-md-6 ">
<iframe className="iframe" src="https://www.youtube.com/embed/sHghbDoFf7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div class="col-12 p-md-5 p-3 col-md-6">
  <h3>Trayectoria</h3>
  
  <p>El dúo centra su espectáculo en la canción popular hispanoamericana, atravesada por el exquisito toque flamenco en la guitarra de Erika González y el sólido trabajo vocal de Cecilia de los Santos. 
</p>
<p>La propuesta musical de estas jóvenes músicas uruguayas se basa en un dinámico e intenso diálogo expresivo e interpretativo entre versiones y composiciones propias, que ha dialogado en distintas oportunidades y proyectos también con la danza y la poesía.
   </p> 
</div>

<div className="col-12 mt-2 mb-3 m-md-auto redes">

              <a
                target="_blank"
                href="https://www.instagram.com/_cecidls/"
                rel="noopener noreferrer"
              > 
              <i className="violeta bi bi-instagram"> </i>
                ceci
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/lalunaenunlapicero/"
                rel="noopener noreferrer"
              > 
              <i className="violeta bi bi-instagram"> </i>
               dúo
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/erigonzalezv/"
                rel="noopener noreferrer"
              > 
              <i className="violeta bi bi-instagram"> </i>
                eri
              </a>
</div>

<div className="col-12 col-md-6 p-md-5 p-3 order-md-2">
<iframe className=" iframe"src="https://www.youtube.com/embed/KWqOTEobki0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



<div className="p-md-5 p-3 col-12 col-md-6 order-md-1">
<h3>Eventos destacados</h3>
  <ul class="eventos">
    <li>13° Festival de Jazz de Montevideo 2020 - Sala Principal del Teatro Solís</li>
    <li>Ganadoras del programa "Guitarra Negra" 2020 - Sala Zitarrosa</li>
    <li>Festival "Música de la Tierra" 2021 - Planetario de Montevideo</li>
    <li>Festival Canelones Jazz 2021- Teatro Politeama</li>
    <li>Festival "Costa Jazz" 2021 - Arenas Solymar</li>
    <li>Festival Montevideo de las Artes 2022 - Sala Principal Teatro Solís</li>
    <li>Festival "Música de la Tierra" 2022 - Fundación Atchugarry (M.A.C.A)</li>
    <li>Ciclo MYDMUS 2023 - Sala Zavala Muniz del Teatro Solís</li>
  </ul>
</div>

</div>
</div>

    <Link to="#contacto" className="flecha" onClick={() => props.handleScrollTo("#contacto")}>
          <i className="bi bi-caret-down"></i>
</Link> 

</section>
    </>
  );
};

export default Trayectoria