import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productList}) => {
    // const {productList}=props
  return (
    <div>
        <div style={{color: 'white',display:'flex',justifyContent:'center'}}>
        <h3>Entradas mas solicitadas</h3>
        </div>

        <div style={{display:'flex',color: 'white', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList