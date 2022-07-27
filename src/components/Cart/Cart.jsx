import {collection, getFirestore} from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext/CartContext';
import ItemCart from '../ItemCart';
const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'luis',
            email: 'luis02@gmail.com',
            phone: '1148693020',
        },
        items: cart.map(product => ({id: product.id, description: product.description, price: product.price,quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection,order)
        .then(({id})=>console.log(id))
    }

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
                <button onClick={handleClick}>Emitir compra</button>
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