import React, { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  getDoc,
  query,
} from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Swal from "sweetalert2";
import Edit from "./Edit";
import Create from "./Create";
import { storage } from "../firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import Login from "./Login";

const Show = () => {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);

  const activeProductsCollection = query(collection(dataBase, "items"));


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
      title: "¿Eliminar el evento?",
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
        Swal.fire("Borrado!", "Chau tu evento", "success");
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
        <div className="container-fluid" id="admin">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column gap-1 justify-content-start flex-md-row text-center mb-2">
                <Create></Create>
              </div>

              <div className="row cuadro " key="titles">
                <div className="col-6 mx-0 px0">Título</div>
                <div className="col-3 mx-0 px0">Fecha</div>{" "}
                <div className="col-3  mx-0 px0">Editar/Borrar</div>
              </div>
              {products.map((product) => (
                <div className="row cuadro">
                  <div className="col-6 mx-0 px0">
                    {product.titulo}
                  </div>
                  
                  
                  <div className="col-3  mx-0 px0">
                    {new Date(product.fecha).toISOString().slice(0,10).split('-').reverse().join('-')}
                  </div>
                  <div
                    
                    className="d-flex col-3  mx-0 px0"
                  >
                    <Edit id={product.id}></Edit>
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
