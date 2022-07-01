import React from 'react'
import {ItemCount} from '../ItemCount'


const Item = ({product}) => {
  console.log(product)
  const {img, name, description}= product
  const onAdd = (mensaje) => {
  console.log(mensaje)}
  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={name}/>
    <div className="card-body">
        <p className="card-text">{name}</p>
        <p className="card-text">{description}</p>
    </div>
    <ItemCount stock={10} onAdd={onAdd} />
    
</div>
  )
}

export default Item