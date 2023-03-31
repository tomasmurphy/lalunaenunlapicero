import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  getDoc,
  where,
  query,
} from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Swal from "sweetalert2";
import Edit from "./Edit";
import Create from "./Create";
import { storage } from "../firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import Login from "./Login";
import Categorias from "./Categorias";
import Inicio from "./Inicio";
import Test from "./ExportExcel";

const Show = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  const activeProductsCollection = query(
    collection(dataBase, "items"),
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(activeProductsCollection, (snapshot) => {
      const productos = snapshot.docs.map((doc) => {
        console.log("leo desde admin");
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
  
      setProducts(productos);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const productosFiltrados = products.filter((producto) => {
      const titulo = producto.titulo.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return (
        titulo.includes(searchTermLower)
      );
    });
    setFilteredProducts(productosFiltrados);
  }, [products, searchTerm]);

  const deleteProduct = async (id) => {
    const productDoc = doc(dataBase, "items", id);
    const productSnapshot = await getDoc(productDoc);
    const productImagenes = productSnapshot.data().imagenes;
    productImagenes.map((img) => borrarImagen(img.name));
    await deleteDoc(productDoc);
    console.log(productDoc);
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "¿Eliminar el producto?",
      text: "Esta accion no es reversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, borralo pá!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Borrado!", "Chau tu producto", "success");
      }
    });
  };

  const borrarImagen = (img) => {
    const desertRef = ref(storage, `/files/${img}`);
    deleteObject(desertRef)
      .then(() => {
        console.log("te borre");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const handleLoginSuccess = (isLogin) => {
    setLoggedIn(isLogin);
  };
  

  return (
    <>
      <Login onLoginSuccess={handleLoginSuccess}></Login>
      {loggedIn ? (
        <></>
      ) : (
        <div className="container-fluid " style={{ backgroundColor: 'black' }}>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column gap-1 justify-content-end flex-md-row text-center mb-2">
                <Create></Create>
              </div>
              <div className="row gap-1 mb-2">
                <input
                  className="col-5 col-md-9  ps-2"
                  type="text"
                  placeholder="Buscar productos"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="row cuadro "  style={{ fontWeight: "bold" }} key="titles">
                <div className="d-none d-md-flex col-md-2 mx-0 px0">
                  Categoría
                </div>
                <div className="col-6 col-md-2 mx-0 px0">Título</div>
                <div className="d-none d-md-flex col-md-2 mx-0 px0">
                  Proveedor
                </div>
                <div className="d-none d-md-flex col-md-3 mx-0 px0">
                  Descripción
                </div>
                <div className="col-3 col-md-1 mx-0 px0">Stock</div>
                <div className="col-3 col-md-2 mx-0 px0">Editar/Borrar</div>
              </div>
              {filteredProducts.map((product) => (
                <div
              style={{ backgroundColor: 'black' } }

                  className={`row cuadro ${
                    product.stock === 0 ? "noStock" : ""
                  } ${product.imagenes.length === 0 ? "noStock" : ""}`}
                  key={product.id}
                >
                  <div className="d-none d-md-flex col-md-2 mx-0 px0">
                    {product.categoria}
                  </div>
                  <div className="col-6 col-md-2 mx-0 px0">
                    {product.titulo}
                  </div>
                  <div className="d-none d-md-flex col-2  mx-0 px0">
                    {product.proveedor}
                  </div>
                  <div
                    className="d-none d-md-flex col-3 descripcion"
                    dangerouslySetInnerHTML={{ __html: product.descripcion }}
                  />

                  <div className="col-3 col-md-1  mx-0 px0">
                    {product.stock}
                  </div>
                  <div  style={{ backgroundColor: 'black' } }
 className="d-flex col-3 col-md-2 mx-0 px0">
                    {/* <Edit id={product.id}></Edit> */}
                    <div>
                      <i
                        onClick={() => {
                          confirmDelete(product.id);
                        }}
                        className=" btnCant bi bi-trash3"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Show;
