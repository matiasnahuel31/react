import React from "react"
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Cart from './components/Cart/Cart'
import ItemListContainer from "./components/containers/ItemListContainer";
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
        <Route path='/partidos/:partidoId/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
