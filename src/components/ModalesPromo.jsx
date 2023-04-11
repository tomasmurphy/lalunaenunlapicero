import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ModalesPromo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nombre =
    props.nombre === "ceci" ? "Cecilia de los Santos" : "Erika Gonzalez";
  const clase = props.nombre === "ceci" ? "ceci" : "eri";

  return (
    <>
      <div onClick={handleShow}>
        <h1 className={clase}>{nombre}</h1>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={true}
        keyboard={true}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={props.nombre === "ceci" ? "d-block" : "d-none"}>
            <p>
              Nace en 1997 en Montevideo (Uruguay), donde se ha formado tanto en
              música académica como en música popular, siendo egresada del
              Conservatorio Sur donde hoy se desempeña como docente.
            </p>
            <p>
              Dirige el coro de mujeres “Panambí” y ha compartido proyectos y
              escenario con muchos músicos y músicas de Argentina y Uruguay como
              Nicolás Ibarburu, Urbano Moraes, Trío Ventana, Luciano
              Supervielle, Daniel Drexler, Julio Cobelli, Maximiliano Nathan,
              Carmen Pi, Sara Sabah, Rossana Taddei, Silvina Gómez, Camila
              Ferrari, Sabrina Díaz, Rodra, AVR, Niña Lobo, Sebastián Macchi,
              Augusto Sinesi, entre otros.
            </p>
            <p>
              En 2022 fue convocada a participar como solista en un concierto de
              la Banda Sinfónica de Montevideo en el Teatro Solís, cantando la
              "Mass In Blue" junto al Ensamble de música de cámara del CICE.
              Como sesionista, cantó y arregló para los discos "Volátil" de
              Silvina Gómez, "Si me voy a dormir" de Maximiliano Nathan,
              "Sankofa" de AVR, "Bardo" de Federico Nathan y "Febrero" de Sofía
              Alvez.
            </p>
          </div>
          <div className={props.nombre === "ceci" ? "d-none" : "d-block"}>
            <p>
            Nace en 1997 en Montevideo, Uruguay.
            </p>
            <p>
            A los 9 años de edad comienza su formación en el campo de la música académica, años después inclina sus estudios hacia el género músical Flamenco lo cual la lleva a vivir 2 años en Sevilla, España, estudiando allí, en el Conservatorio de Música "Cristóbal de Morales" y la Academia "Artes Escénicas Rebollar" en la modalidad guitarra flamenca.

            </p>
            <p>
            Docente de guitarra, ha dado talleres y masterclasses en Argentina, Uruguay, Colombia y Chile, donde también ha trabajado como guitarrista en diversos Tablaos Flamencos.

            </p>
            <p>
            Participa como guitarrista en diversos escenarios y festivales de España y el Reino Unido.
 
           </p>
           <p> Destaca su participación en el 13° Festival de Jazz de Montevideo 2020, presentando en la sala principal del Teatro Solís, su concierto de guitarra flamenca en formato cuarteto. 
 </p>
 <p>En el 2021, estrena “Travesía” a dúo con el guitarrista uruguayo Gonzalo Franco en la sala Zavala Muniz.
</p>
          </div>
<div className="row">
<img src="../../vivo/t-clorotipias (1).png" alt="clorotipia" width="100" className="m-0 p-0 col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (2).png" alt="clorotipia" width="100" className="m-0 p-0 col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (3).png" alt="clorotipia" width="100" className="m-0 p-0 col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (4).png" alt="clorotipia" width="100" className="m-0 p-0 col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (5).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (6).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (7).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (8).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (9).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (10).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (15).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />
<img src="../../vivo/t-clorotipias (13).png" alt="clorotipia" width="100" className="m-0 p-0  col-1 img-fluid" />

</div>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalesPromo;
