import React, {useState} from "react";
import './ItemCount.css';
import './Item/Item'

export const ItemCount = ({stock,onAdd,initial=0}) => {

   const[contador, setContador] = useState(initial); 
   
    const handlerClick =() =>{ 
        setContador(contador+1);
        if(contador < stock){

            setContador(contador + 1)

        }
        if(contador >= stock){
    
           alert("No hay stock")
        }
    }

    const decrease = () => {
        if(contador>0){
            setContador(contador-1)
        }
    }

    return( 
        <>
            <div class="contador">{contador}</div>
            <div class="centradobutton">
            <button onClick={decrease}>-</button> 
            <button onClick={handlerClick}>+</button> 
            <button onClick={() =>{onAdd(contador);}}>Agregar al Carrito</button> 
            </div>
        </>
    
    )
}
export default ItemCount
