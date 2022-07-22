import React from "react";
// import Cart from "../assets/carrito.png";
import { useCartContext } from "../../cartContext/CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
          <i className="bi bi-cart3"></i>
           <span>{totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget;

// const styles = {
   
//     Cart:{
        
//         width: '5%',
//         height: '5%',

//     },

    
// }