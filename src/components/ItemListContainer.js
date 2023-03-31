import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Seo from './Head';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
const ItemListContainer = (props) => {
    
    const cartContext = useContext(CartContext);
    const {items} = cartContext  


    return (
        <>
            <div id="calendario" >
                <div className='item row'><ItemList items={items} />
                </div>
                <Link to="#trayectoria" className="flecha" onClick={() => props.handleScrollTo("#trayectoria")}>
          < i className="bi bi-caret-down"></i>
                </Link> 
                <div className='btnCalendario'>PROXIMOS CONCIERTOS  <i className="bi bi-calendar-check"></i></div>
            </div>
        </>
    );
};

export default ItemListContainer;
