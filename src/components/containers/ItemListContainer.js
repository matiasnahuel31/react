import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getData } from '../../mocks/fakeApi'
import {useParams} from 'react-router-dom';
const products = [
  {id:'01', price: 2500, name:'Partido 1', partidos: 'argentina', description:"ARGENTINA VS MEXICO", img:'https://i.postimg.cc/NFscp4J2/argvmex.png', stock:5},
  {id:'02', price: 2000, name:'Partido 2', partidos: 'argentina',description:"ARGENTINA VS ARABIA SAUDITA", img:'https://i.postimg.cc/mkfwspfh/argvarb.png', stock:15},
  {id:'03', price: 1000, name:'Partido 3', partidos: 'otros',description:"ESTADOS UNIDOS VS INGLATERRA", img:'https://i.postimg.cc/FRN9fN44/estvingl.png', stock:7},
];

export const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  const {partidoId} = useParams();
    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      const getData = new Promise ((resolve, reject) =>{
        //acciones
        let condition = true
        setTimeout(()=>{
          if(condition){
            resolve(products)
          }else{
            reject('salio mal :(')
          }
        },1000)
      });
      
      if(partidoId){
        getData.then(res => setProductList(res.filter(product => product.partidos === partidoId)) );
      }else{
        getData.then(res => setProductList(res) );
      }
      getProducts()
    },[partidoId])
  
  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
      
    </div>
  )
}

export default ItemListContainer