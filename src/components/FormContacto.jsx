import { useState } from "react";
import Swal from "sweetalert2";
import icono from '../img/detalle.png'

export const FormContacto = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    let deviceType = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      ? "api"
      : "web";
    const whatsapp = `Hola *La luna en un lapicero* 🌕. Soy ${nombre} y mi mensaje es: ${mensaje}`;
    let linkCompra = `https://${deviceType}.whatsapp.com/send?phone=59897453324&text=${whatsapp}`;
    window.open(linkCompra, "_blank");

    // Muestra el mensaje de agradecimiento
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
  };

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeMensaje = (event) => {
    setMensaje(event.target.value);
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div className="formulario">
          <label>Nombre</label>
          <input
            type="text"
            required
            placeholder="tu nombre"
            name="nombre"
            value={nombre}
            onChange={handleChangeName}
          />
          <label>Mensaje</label>
          <textarea
            type="text"
            rows="5"
            placeholder="Mandanos un mensaje de WhatsApp"
            name="mensaje"
            value={mensaje}
            onChange={handleChangeMensaje}
          />

          <div className="col-12 text-center">
            <input className="botonForm" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </>
  );
};
