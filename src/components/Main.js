import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContent from './ItemDetailContent';
import Home from './Home'
import Show from './Show'
import NavMenu from './NavMenu';
import Nav from './Nav';
import BannerPromo from './BannerPromo';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import { CartProvider } from '../context/CartContext';

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
                    {/* <NavMenu></NavMenu> */}
                    <Cart show={showCart} handleModal={handleCartModal}></Cart>
                    <div className="container-fluid sinBorde">
                        <Routes >
                            <Route path='/' element={<Home handleScrollTo={handleScrollTo} />} />
                            <Route path='/detalle/:idProducto' element={<ItemDetailContent handleCartModal={handleCartModal} />} />
                            <Route path='/admin' element={<Show />} />
                        </Routes>
                    </div>
                    {/* <BannerPromo handleCartModal={handleCartModal} /> */}
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
