import React, { useState, useEffect } from 'react';
import {getFirestore,doc,getDoc} from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
// import { getData } from '../../mocks/fakeApi'
import {useParams} from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading]=useState(true)
    const { detalleId } = useParams();


    
    // const getProducts = async () => {
    //   try{
    //     const respuesta = await getData
    //     setData(respuesta)
    //   }catch(error){
    //     console.log(error)
    //   }finally{
    //     setLoading(false)
    //   }
    // }

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb,'products','detalleId');
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))

    }, [detalleId]);

    //console.log(product);
    return (

        <div style={{display:'flex',justifyContent:'center'}}>
              <ItemDetail data={data} />
        </div>

        // <div>
            
        //     {
        //     (
        //       <div>
        //       {loading ? (
        //           <h2>Cargando...</h2>
        //       ) : (
        //           <div style={{display:'flex',justifyContent:'center'}}>
        //               <ItemDetail data={data} />
        //           </div>
        //       )}
        //   </div>
        //     )}
        // </div>
    );
};

export default ItemDetailContainer;