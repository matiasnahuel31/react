import React from 'react'
//import {ItemCount} from '../ItemCount'
import {Link} from 'react-router-dom';
//import { Info } from '@mui/icons-material';

const Item = ({product}) => {
  console.log(product)
  const {img, name, description}= product
  const onAdd = (mensaje) => {
  console.log(mensaje)}
  return (
//     <div className="card" style={{width:'20rem', margin:'.5rem'}}>
//     <img src={img}className="card-img-top" alt={name}/>
//     <div className="card-body">
//         <p className="card-text">{name}</p>
//         <p className="card-text">{description}</p>
//     </div>
//     <ItemCount stock={10} onAdd={onAdd} />
    
// </div>
    <Link to = { `detalle/${product.id}`} className = "product">
    <img src={product.img} alt = ""/>
    <p>{product.name}</p>
    </Link>
  )
}

export default Item