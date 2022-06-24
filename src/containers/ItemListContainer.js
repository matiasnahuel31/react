import React from "react"

const Datos = ({ numeroTelefono, comprarEntrada, NavBar, name}) => {

    return (
        <>
           <p>Numero telefonico:{numeroTelefono}</p>
          

           <button onClick={comprarEntrada}>Comprar Entrada</button>
           
           
        </>
    )
}
export default Datos