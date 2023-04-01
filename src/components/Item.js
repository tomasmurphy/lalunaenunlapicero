import React from 'react'
import { Link } from 'react-router-dom'
// import Anteojo from './Anteojo';

export const Item = (
  {
    id = "",
    titulo = '',
    imagenes = '',
    fecha = "",
    
  }

) => {
  const tituloId = titulo.replace(/_|#| |@|<>/g, "_");

  return (
    <div className="" key={id}>
      <Link to={`/detalle/${id}#${tituloId}`} className=''>



        {/* <div className=""> */}
          <img src={imagenes[0].url} alt={`Foto de ${titulo}`} className='img-fluid' />

          {/* <div className="">Fecha:{fecha}</div> */}
        {/* </div> */}

      </Link>
    </div>)
}
