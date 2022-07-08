import React from "react"
import NavBar from './components/NavBar'
//import ItemListContainer from './components/containers/ItemListContainer'
import './App.css';
// import {ItemCount} from "./components/ItemCount"
import ItemListContainer from "./components/containers/ItemListContainer";
//import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element = {<ItemListContainer/>}/>
        <Route path='/partidos/:partidoId' element = {<ItemListContainer/>}/>
        <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
      </Routes>
      {/* <ItemListContainer numeroTelefono= '11-3245-1345' /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
