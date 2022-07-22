import React from "react"
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/containers/ItemListContainer'
import './App.css';
import Cart from './components/Cart/Cart'
// import {ItemCount} from "./components/ItemCount"
import ItemListContainer from "./components/containers/ItemListContainer";
//import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './cartContext/CartContext';

function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<ItemListContainer/>}/>
        <Route path='/partidos/:partidoId' element = {<ItemListContainer/>}/>
        <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
