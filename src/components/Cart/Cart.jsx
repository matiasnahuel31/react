import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext/CartContext';
import ItemCart from '../ItemCart';
const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if(cart.length === 0){
    return(
        <>
            <p style={styles.Color}>No hay elementos en el carrito</p>
            <Link to='/'>Comprar Entradas</Link>
        </>
    );
    }
    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>
    )
}

export default Cart

const styles = {
   
    Color:{
        
        color:'white'

    },

    
}