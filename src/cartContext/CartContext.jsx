import React, {useState, useContext} from "react"

const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState([]);

    const addProduct = (item, quantity) =>{

        if(isInCart(item.id)){
            setCart(cart.map(producto =>{
                return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity } : producto
            }))
        } else{
            setCart([...cart, { ...item,quantity}]);
        }
    }

    console.log('carrito: ',cart);

    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false;
    const removeProduct = (id) => setCart([cart.filter(producto => producto.id !== id)]);

    return(

        <cartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider