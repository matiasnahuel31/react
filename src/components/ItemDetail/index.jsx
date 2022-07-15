import React from 'react';
import { useState } from 'react';
import ItemCount from '../ItemCount'
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
        <div className="content" style={{color: 'white',display:'flex',justifyContent:'center'}}>
            <h1>{data.name}</h1>
        </div>
        <div style={{color: 'white',display:'flex',justifyContent:'center'}}>
            <h2>{data.description}</h2>
        </div>
        </div>
        {   
            goToCart
                ? <Link to = '/cart'>Terminar Compra</Link>
                : <ItemCount stock={10} onAdd={onAdd} />

        }


        </div>
        


    );
}

export default ItemDetail;