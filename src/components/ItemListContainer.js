import React, { useContext } from 'react';
import { ItemList } from './ItemList';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {

    const cartContext = useContext(CartContext);
    const { items } = cartContext
    

    return (
        <>
            <section id="calendario">
            <div className='btnCalendario'>PROXIMOS CONCIERTOS  <i className="ms-1 bi bi-calendar-check"></i></div>
            <div className='carousel' >
            <ItemList items={items} />
                </div>
                <Link to="#trayectoria" className="flecha" onClick={() => props.handleScrollTo("#trayectoria")}>
                    < i className="bi bi-caret-down"></i>
                </Link>
                
            </section>
        </>
    );
};

export default ItemListContainer;
