import React from 'react'
import './item.css';
import {Link} from 'react-router-dom';
const Item = ({product}) => {
  const {img, name, description}= product

  return (
     <section className='ordenarTodo'>
     <div className="card" style={{width:'20rem', margin:'.5rem'}}>
     <img src={img}className="card-img-top" alt={name}/>
     <div className="card-body">
         <p className="card-text">{name}</p>
         <p className="card-text">{description}</p>
     </div>

    <Link to = { `detalle/${product.id}`} className = "product">
    <button className='btn btn-primary'>Ver detalle</button>
    </Link>
    </div>
    </section>

  )
}

export default Item