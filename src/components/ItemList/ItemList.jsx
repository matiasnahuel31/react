import React from 'react'
import Item from '../Item/Item'
import './itemList.css';

const ItemList = ({data}) => {
  return (
    <div>
        <div style={{color: 'white',display:'flex',justifyContent:'center'}}>
        <h3 className='titu'>Entradas mas solicitadas</h3>
        </div>
        <div className='grid'>
        <div className='ordena'>
        {data.map((product)=><Item key={product.id} product={product}/>)}
        </div>
        </div>
    </div>
  )
}

export default ItemList