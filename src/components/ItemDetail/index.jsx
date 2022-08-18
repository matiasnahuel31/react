import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount';
import './itemDetail.css';
import {Link} from 'react-router-dom'
import { useCartContext } from '../../cartContext/CartContext';
export const ItemDetail = ({data}) =>{

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data,quantity);
        
    }

    return(
        <div className="container">
        <div className="detail">
            <img className='detail__image' src={data.img} alt=""/>
        <div className="content">
            <h1>{data.description}</h1>
            <h2>{data.name}</h2>
            <h3>Precio ${data.price}</h3>
            <h3>Fecha: {data.date}</h3>
            <h3>Estadio: {data.estadio}</h3>
        </div>
        </div>
        {   
            goToCart
                ? <div className='centrar'><Link to = '/cart'><button>Terminar Compra</button></Link></div>
                : <ItemCount onAdd={onAdd} />
        }

        </div>
    
    );
}

export default ItemDetail;