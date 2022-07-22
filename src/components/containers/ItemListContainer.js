import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';
// import { getData } from '../../mocks/fakeApi'
import {useParams} from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  const {partidoId} = useParams();
    // const getProducts = async () => {
    //   try{
    //     const respuesta = await getData
    //     setProductList(respuesta)
    //   }catch(error){
    //     console.log(error)
    //   }finally{
    //     setLoading(false)
    //   }
    // }

    useEffect(()=>{
      // const getData = new Promise ((resolve, reject) =>{
      //   //acciones
      //   let condition = true
      //   setTimeout(()=>{
      //     if(condition){
      //       resolve(products)
      //     }else{
      //       reject('salio mal :(')
      //     }
      //   },1000)
      // });
      
      // if(partidoId){
      //   getData.then(res => setProductList(res.filter(product => product.partidos === partidoId)) );
      // }else{
      //   getData.then(res => setProductList(res) );
      // }
      // getProducts()
      const querydb = getFirestore();
      const queryCollection = collection(querydb,'products');
       if(partidoId){
        const queryFilter = query(queryCollection, where('partidos', '==',partidoId))
        getDocs(queryCollection)
        .then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data() }))))
       }else{
        getDocs(queryCollection)
        .then(res => setProductList(res.docs.map(product => ({id: product.id, ...product.data() }))))
       }
    },[partidoId])
  
  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
      
    </div>
  )
}

export default ItemListContainer