import { useEffect, useState } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Modal from "react-bootstrap/Modal";
import ImagenUpload from "./ImageUpload";
import { Editor } from "./MostrarImagen";


const Edit = ({ id  }) => {
  const [titulo, setTitulo] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState(new Date());

  const subirImagenes = (img, borrar) => {
    if (borrar === 1) {
      const borrarUnaImagen = imagenes.filter((imagen) => imagen.name !== img);
      console.log(borrarUnaImagen);
      setImagenes(borrarUnaImagen);
    } else {
      setImagenes([...imagenes, img]);
    }
  };
  const update = async (e) => {
    e.preventDefault();
    const product = doc(dataBase, "items", id);
    const data = {
      titulo: titulo,
      descripcion: descripcion,
      imagenes: imagenes,
      fecha: fecha,
      };
    await updateDoc(product, data);
    
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(dataBase, "items", id));
    
    if (product.exists()) {
      setTitulo(product.data().titulo);
      setDescripcion(product.data().descripcion);
      setImagenes(product.data().imagenes);
      setFecha(product.data().fecha);
    } else {
      console.log("El producto no existe");
    }
  };
console.log(fecha)
  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDescripcionChange = (value) => {
    setDescripcion(value);
  };
  return (
    <>
      <div className="" onClick={handleShow}>
        <i className="btnCant bi bi-pencil-square"></i>
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
          <Modal.Title>Editar evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container create">
            <div className="row">
              <div className="col">
                <div className="mb-3 row cajaUpload">
                  <div className="col-4 text-center ">
                    {imagenes[0] === undefined ? (
                      <ImagenUpload
                        updateFile={{ name: "", url: "" }}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    ) : (
                      <ImagenUpload
                        updateFile={imagenes[0]}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    )}
                  </div>
                  <div className="col-4 text-center ">
                    {imagenes[1] === undefined ? (
                      <ImagenUpload
                        updateFile={{ name: "", url: "" }}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    ) : (
                      <ImagenUpload
                        updateFile={imagenes[1]}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    )}
                  </div>
                  <div className="col-4 text-center ">
                    {imagenes[2] === undefined ? (
                      <ImagenUpload
                        updateFile={{ name: "", url: "" }}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    ) : (
                      <ImagenUpload
                        updateFile={imagenes[2]}
                        subirImagenes={subirImagenes}
                      ></ImagenUpload>
                    )}
                  </div>
                </div>
                <form onSubmit={update} className="row">
                  
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
                    Actualizar
                  </button>
                </form>
              </div>
            </div>
          </div>{" "}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Edit;
