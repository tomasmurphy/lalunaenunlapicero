import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContent from './ItemDetailContent';
import Home from './Home'
import Show from './Show'
import Nav from './Nav';
import { useLocation } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Libreta from './Libreta'
import  Vivo from './Vivo';

const Main = () => {
    const location = useLocation().pathname
    const [showCart, setShowCart] = useState(false);
    const handleCartModal = () => {
        setShowCart(!showCart);
    };
    const handleScrollTo = (hash) => {
        const hashRef = document.querySelector(hash);
        if (hashRef) {
          const { top } = hashRef.getBoundingClientRect();
          window.scrollTo({ top: top + window.pageYOffset - 64, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

    return (
        <>
            {(location !== "/admin") ?
                <>  <CartProvider>
                    <Nav handleScrollTo={handleScrollTo} />
                    <div className="container-fluid sinBorde">
                        <Routes >
                            <Route path='/' element={<Home handleScrollTo={handleScrollTo} />} />
                            <Route path='/detalle/:idProducto' element={<ItemDetailContent handleCartModal={handleCartModal} />} />
                            <Route path='proyectos/la_libreta_de_las_tapas_negras' element={<Libreta />} />
                            <Route path='proyectos/vivo' element={<Vivo />} />
                            <Route path='/admin' element={<Show />} />
                        </Routes>
                    </div>
                    </CartProvider>
                </>
                : <div className="container-fluid sinBorde">
                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/admin' element={<Show />} />
                    </Routes>
                </div>}
        </>
    );
};

export default Main;
