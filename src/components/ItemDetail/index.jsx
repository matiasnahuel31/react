import React from 'react';
import ItemCount from '../ItemCount'
export const ItemDetail = ({data}) =>{
    const onAdd = (mensaje) => {
    console.log(mensaje)}
    return(
        <div className="container">
        <div className="detail">
            <img className='detail__image' src={data.img} alt=""/>
        <div className="content" style={{color: 'white',display:'flex',justifyContent:'center'}}>
            <h1>{data.name}</h1>
        </div>
        <div style={{color: 'white',display:'flex',justifyContent:'center'}}>
            <h2>{data.description}</h2>
        </div>
        </div>
        <ItemCount stock={10} onAdd={onAdd} />
        </div>
        


    );
}

export default ItemDetail;