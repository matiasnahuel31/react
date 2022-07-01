import React from "react"
import NavBar from './components/NavBar'
//import ItemListContainer from './components/containers/ItemListContainer'
import './App.css';
// import {ItemCount} from "./components/ItemCount"
import Datos from "./components/containers/ItemListContainer";

function App() {

  return (
    <>
      <NavBar />
      <Datos numeroTelefono= '11-3245-1345' />
    </>
  );
}

export default App;
