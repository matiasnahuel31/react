import React from "react"
import NavBar from './components/NavBar'
//import ItemListContainer from './components/containers/ItemListContainer'
import './App.css';
import {ItemCount} from "./components/ItemCount"
import Datos from "./components/containers/ItemListContainer";

function App() {
  
  const onAdd = (mensaje) => {
  console.log(mensaje)}
  return (
    <>
      <NavBar />
      <Datos numeroTelefono= '11-3245-1345' />
      <ItemCount stock={10} onAdd={onAdd} />
    </>
  );
}

export default App;
