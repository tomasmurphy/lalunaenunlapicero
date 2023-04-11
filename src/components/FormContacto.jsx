import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import icono from '../img/detalle.png'


export const FormContacto = () => {

  const form = useRef();
  const [nov, setNov] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0n5st72', 'template_ux15tsf', form.current, '4Jc5CAc5mEdng1aue')
      .then((result) => {
        Swal.fire({
                text: 'Gracias por contactarnos!',
                iconHtml: `<img src="${icono}" alt="Icono personalizado" width="100"/>`,
                showConfirmButton: true,
                confirmButtonText: 'Ta!',
                customClass: {
                  icon: 'custom-icon-class',
                },
                confirmButtonClass: 'btnSweet'
              });
              form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleNovChange = (e) => {
    setNov(e.target.checked);
  };

  return ( 
    <>
      <form id="form" ref={form} onSubmit={sendEmail}>
        <div className="formulario">
          <label>Nombre</label>
          <input type="text" name="name"  required placeholder="*campo requerido"/>
          <label>Email</label>
          <input type="email" name="email"  required placeholder="campo requerido"/>
          <label>Mensaje</label>
          <textarea name="message" rows={5}  placeholder="Puedes dejarnos un mensaje o dejar este campo vacío si solo quieres suscribirte para recibir novedades."/>
          <div className='d-flex mt-4 mb-2'>
         
         
         
            <label className="custom-checkbox">
  <input type="checkbox" name="nov" checked={nov} onChange={handleNovChange} />
  <input type="hidden" name="nov_message" value={nov ? "Quiero recibir novedades de la Luna en un lapicero" : "No se suscribió"} />
  <span className="checkmark ms-2"></span>
  <span className="ms-4 labelCheck">Quiero recibir novedades de la Luna en un lapicero</span>
</label>
          </div>
          <div className="col-12 text-center">
            <input className='botonForm' type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </>
  );
};




// import { useState } from "react";
// import Swal from "sweetalert2";
// import icono from '../img/detalle.png'

// export const FormContacto = () => {
  
//   const [nombre, setNombre] = useState("");
//   const [mensaje, setMensaje] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let deviceType = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
//       ? "api"
//       : "web";
//     const whatsapp = `Hola *La luna en un lapicero* 🌕. Soy ${nombre} y mi mensaje es: ${mensaje}`;
//     let linkCompra = `https://${deviceType}.whatsapp.com/send?phone=59897453324&text=${whatsapp}`;
//     window.open(linkCompra, "_blank");

//     // Muestra el mensaje de agradecimiento
//     Swal.fire({
//       text: 'Gracias por contactarnos!',
//       iconHtml: `<img src="${icono}" alt="Icono personalizado" width="100"/>`,
//       showConfirmButton: true,
//       confirmButtonText: 'Ta!',
//       customClass: {
//         icon: 'custom-icon-class',
//       },
//       confirmButtonClass: 'btnSweet'
//     });
//   };

//   const handleChangeName = (event) => {
//     setNombre(event.target.value);
//   };

//   const handleChangeMensaje = (event) => {
//     setMensaje(event.target.value);
//   };

//   return (
//     <>
//       <form id="form" onSubmit={handleSubmit}>
//         <div className="formulario">
//           <label>Nombre</label>
//           <input
//             type="text"
//             required
//             placeholder="tu nombre"
//             name="nombre"
//             value={nombre}
//             onChange={handleChangeName}
//           />
//           <label>Mensaje</label>
//           <textarea
//             type="text"
//             rows="5"
//             placeholder="Mandanos un mensaje de WhatsApp"
//             name="mensaje"
//             value={mensaje}
//             onChange={handleChangeMensaje}
//           />

//           <div className="col-12 text-center">
//             <input className="botonForm" type="submit" value="Enviar" />
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };
