import { useState } from "react"
import {getFirestore} from 'firebase/firestore';
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { ToastContainer,toast } from "react-toastify"
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ItemCart from '../ItemCart';
import { useCartContext } from '../../cartContext/CartContext';
import './cart.css';

const Cart = () => {
  const [buyer, setBuyer] = useState({ nombre: '', telefono: '', email: '' })

  const { cart, totalPrice, clearCart } = useCartContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value
    })
  }
  const endPurchase = () => {
    const order = {
      buyer,
      items: cart,
      date: serverTimestamp(),
      total: totalPrice()
    }
    const db = getFirestore();
    const orderCollection = collection(db,'orders');
    const pedido = addDoc(orderCollection, order)


    if (buyer.nombre && buyer.telefono && buyer.email) {
      pedido
        .then(res => {
          toast.success(`Finalizo la compra! Id : ${res.id}`)
        })
        .catch(error => {
          toast.error("hubo un error!")
        })
        .finally(() => {
          clearCart()
        })
    } else {
      toast.error("Por favor complete los datos del comprador", {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  if(cart.length === 0){
         return(
             <div className='centrar'>
                 <p>No hay elementos en el carrito</p>
                <Link to='/'><button>Comprar Entradas</button></Link>
             </div>
         );
  }
  return (
    <>{cart.map(product => <ItemCart key={product.id} product={product}/>)}
    <section className="buyer">
    <div className="centrar">
      <h4 className="precio">Precio total: ${totalPrice()}</h4>
      <button className="button" onClick={() => { clearCart() }} >Vaciar Carrito</button>
      <div className="border">
        <p className="datos">Datos del comprador</p>
        <form className="form">
          <input value={buyer.nombre} name="nombre" type="text" placeholder="Nombre" onChange={handleChange} />
          <input value={buyer.telefono} name="telefono" type="number" placeholder="Telefono" onChange={handleChange} />
          <input value={buyer.email} name="email" type="email" placeholder="Email" onChange={handleChange} />
        </form>
        </div>
        <button className="button2" onClick={endPurchase}>Finalizar compra</button>
        <ToastContainer />
      </div>
    </section>
    </>
  )
}
export default Cart