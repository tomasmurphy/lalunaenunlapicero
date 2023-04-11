import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Loader from "../components/Loader";
import { getItems } from "../components/apiCrudRealTime";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [youTube, setYouTube] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const itemsCollection = collection(dataBase, "items");
      const queryRef = query(itemsCollection, orderBy("fecha", "asc"));
      const querySnapshot = await getDocs(queryRef);
      const productos = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(productos);
      setIsLoading(false);
    };

    getItems()
      .then((categorias) => {
        const filtro = categorias.filter((item) =>
          item.hasOwnProperty("categoria")
        );
        setYouTube(filtro);
      })
      .catch((error) => {
        console.log(error);
      });

    loadProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        youTube,
      }}
    >
      {isLoading ? (
        <div className="loader-container">
          <div className="loader">
            <Loader />
          </div>
        </div>
      ) : (
        children
      )}
    </CartContext.Provider>
  );
};
