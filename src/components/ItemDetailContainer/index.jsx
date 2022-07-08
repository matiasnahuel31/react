import React, { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom';

const products = [
    {id:'01', name:'Partido 1', partidos: 'argentina', description:"ARGENTINA VS MEXICO", img:'https://i.postimg.cc/NFscp4J2/argvmex.png', stock:5},
    {id:'02', name:'Partido 2', partidos: 'argentina',description:"ARGENTINA VS ARABIA SAUDITA", img:'https://i.postimg.cc/mkfwspfh/argvarb.png', stock:15},
    {id:'03', name:'Partido 3', partidos: 'otros',description:"ESTADOS UNIDOS VS INGLATERRA", img:'https://i.postimg.cc/FRN9fN44/estvingl.png', stock:7},
  ];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

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
        
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))) );

    }, [detalleId]);

    //console.log(product);
    return (
        <div>
            {
            (
                <>
                    <ItemDetail data={data} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;