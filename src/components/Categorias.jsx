import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { getItems, updateItem } from "./apiCrudRealTime";
import Swal from "sweetalert2";

const Categorias = () => {
  const [show, setShow] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [colorMap, setColorMap] = useState({});
  const [updatedCategoria, setUpdatedCategoria] = useState(null); // nuevo estado para almacenar la categoría actualizada

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems();
      const categorias = items.filter(item => item.hasOwnProperty("categoria"));
      const colorMap = {};
      categorias.forEach(cat => colorMap[cat.id] = "green");
      setCategorias(categorias);
      setColorMap(colorMap);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Actualiza solo la categoría que se acaba de actualizar en la lista
    if (updatedCategoria) {
      setCategorias(prevCategorias =>
        prevCategorias.map(cat =>
          cat.id === updatedCategoria.id ? updatedCategoria : cat
        )
      );
      setColorMap(prevColorMap => ({ ...prevColorMap, [updatedCategoria.id]: "green" }));
      setUpdatedCategoria(null);
    }
  }, [updatedCategoria]);

  const handleCategoriaChange = (event, id) => {
    const updatedCategorias = categorias.map((cat) => {
      if (cat.id === id) {
        return { ...cat, categoria: event.target.value };
      } else {
        return cat;
      }
    });
    setCategorias(updatedCategorias);
    setColorMap(prevColorMap => ({ ...prevColorMap, [id]: "red" }));
  };

  const handleUpdateCategoria = async (id) => {
    setColorMap(prevColorMap => ({ ...prevColorMap, [id]: "green" }));
    const categoriaToUpdate = categorias.find((cat) => cat.id === id);
    const updatedCategoria = { categoria: categoriaToUpdate.categoria };
    Swal.fire({
      title: "¿Estás seguro de actualizar la categoría?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "my-swal",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateItem(id, updatedCategoria);
        Swal.fire({
          title: "Categoría actualizada con éxito",
          icon: "success",
        });
        setUpdatedCategoria({ ...categoriaToUpdate, ...updatedCategoria }); // actualiza el estado de la categoría actualizada
      }
    });
  };

  return (
    <>
      <div className="boton" onClick={handleShow}>
        youTube
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
          <Modal.Title>youTube ID</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="create container-fluid">
            {categorias.map((cat) => (
              <div className="d-flex" key={cat.id}>
                <input
                  type="text"
                  className="ps-1"
                  value={cat.categoria}
                  onChange={(event) => handleCategoriaChange(event, cat.id)}
                />
                <div
                  className="btnCat"
                  onClick={() => handleUpdateCategoria(cat.id)}
                >
                  <i
                    style={{ backgroundColor: colorMap[cat.id] }}
                    className="ms-2 bi bi-check-square-fill"
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Categorias;
