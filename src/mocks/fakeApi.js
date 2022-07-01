//Array de obj
const products = [
    {id:'01', name:'Partido 1', description:"ARGENTINA VS MEXICO", img:'https://i.postimg.cc/5NJgJXkG/avm.jpg', stock:5},
    {id:'02', name:'Partido 2', description:"ARGENTINA VS ARABIA SAUDITA", img:'https://i.postimg.cc/sDKYRwWQ/ava.jpg', stock:15},
    {id:'03', name:'Partido 3', description:"EEUU VS INGLATERRA", img:'https://i.postimg.cc/6pmC8qYB/ive.jpg', stock:7},
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
  })