import React, { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail";
import { getData } from '../../mocks/fakeApi'
import {useParams} from 'react-router-dom';

const products = [
    {id:'01', price: 2500, name:'Partido 1', partidos: 'argentina', description:"ARGENTINA VS MEXICO", img:'https://i.postimg.cc/NFscp4J2/argvmex.png', stock:5},
    {id:'02', price: 2000, name:'Partido 2', partidos: 'argentina',description:"ARGENTINA VS ARABIA SAUDITA", img:'https://i.postimg.cc/mkfwspfh/argvarb.png', stock:15},
    {id:'03', price: 1000, name:'Partido 3', partidos: 'otros',description:"ESTADOS UNIDOS VS INGLATERRA", img:'https://i.postimg.cc/FRN9fN44/estvingl.png', stock:7},
  ];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading]=useState(true)
    const { detalleId } = useParams();


    const getProducts = async () => {
      try{
        const respuesta = await getData
        setData(respuesta)
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

        })
        
        getProducts();
        
        getData.then(res => setData(res.find(product => product.id === detalleId)) );

    }, [detalleId]);

    //console.log(product);
    return (

        <div>
            
            {
            (
              <div>
              {loading ? (
                  <h2>Cargando...</h2>
              ) : (
                  <div style={{display:'flex',justifyContent:'center'}}>
                      <ItemDetail data={data} />
                  </div>
              )}
          </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;