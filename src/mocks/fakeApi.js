//Array de obj
export const products = [
  {id:'01', name:'Partido 1', partidos: 'argentina', description:"ARGENTINA VS MEXICO", img:'https://i.postimg.cc/NFscp4J2/argvmex.png', stock:5},
  {id:'02', name:'Partido 2', partidos: 'argentina',description:"ARGENTINA VS ARABIA SAUDITA", img:'https://i.postimg.cc/mkfwspfh/argvarb.png', stock:15},
  {id:'03', name:'Partido 3', partidos: 'otros',description:"ESTADOS UNIDOS VS INGLATERRA", img:'https://i.postimg.cc/FRN9fN44/estvingl.png', stock:7},
]

export const getData = new Promise ((resolve, reject) =>{
  //acciones
  let condition = true
  setTimeout(()=>{
    if(condition){
      resolve(products)
    }else{
      reject('salio mal :(')
    }
  },3000)
});





