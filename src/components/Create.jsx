import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Modal from "react-bootstrap/Modal";
import ImagenUpload from "./ImageUpload";
import { Editor } from "./MostrarImagen";

const Create = () => {
  const [fecha, setFecha] = useState(0 );
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);

  const productsCollection = collection(dataBase, "items");

  const subirImagenes = (img, borrar) => {
    if (borrar === 1) {
      const borrarUnaImagen = imagenes.filter((imagen) => imagen.name !== img);
      console.log(borrarUnaImagen);
      setImagenes(borrarUnaImagen);
    } else {
      setImagenes([...imagenes, img]);
    }
  };
  const store = async (e) => {
    // const fechaFormateada = new Date(fecha).toLocaleDateString("es-ES");
    e.preventDefault();
    await addDoc(productsCollection, {
      titulo: titulo,
      descripcion: descripcion,
      imagenes: imagenes,
      fecha: fecha,
    });
    setDescripcion("");
    setTitulo("");
    setImagenes([]);
    setFecha("");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDescripcionChange = (value) => {
    setDescripcion(value);
  };

  return (
    <>
      <div className="boton" onClick={handleShow}>
        Cargar nuevo evento
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cargar evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid create">
            <div className="row">
              <div className="col">
                <div className="mb-3 row cajaUpload">
                  <div className="col-4 text-center ">
                    <ImagenUpload subirImagenes={subirImagenes}></ImagenUpload>
                  </div>
                  <div className="col-4 text-center">
                    <ImagenUpload subirImagenes={subirImagenes}></ImagenUpload>
                  </div>
                  <div className="col-4 text-center">
                    <ImagenUpload subirImagenes={subirImagenes}></ImagenUpload>
                  </div>{" "}
                </div>
                <form onSubmit={store} className="row">
                  <div className=" mb-3 col-12">
                    <label className="form-label"><b>Titulo</b></label>
                    <input
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3 col-12">
                  <label className="form-label"><b>Descripcion</b></label>
                    
                    <Editor
                      descripcion={descripcion}
                      cargarDescripcion={handleDescripcionChange}
                    ></Editor>
                  </div>

                  <div className=" mb-3 col-12">
                    <label className="form-label"><b>Fecha</b></label>
                    <input
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      type="date"
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleClose}
                    className="btn btnCreate"
                  >
                    Crear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Create;
