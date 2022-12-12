import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'


const ITEM ={id: 2, title: "Gati", description: "Bolsa Alimento Gati", precio: 3500, stock:3,img: "https://i.postimg.cc/1RcS2fK5/gati-gato.jpg"}

const ItemDetail = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetail().then(res => {
            setItem ( res )
        })
    }, [])


    const getItemDetail = () =>{
        return new Promise( (resolve, reject) => {
            setTimeout(()=>{
                resolve (ITEM)
            },2000);
        })
    }


  return (
    <div>
       
       <img src={item.img} alt="" /> 
       <h1>Detalle del producto</h1>
                  
       <li>{item.title}</li>
       <li>{item.description}</li>
       <li>{item.Precio}</li>
       <ItemCount stock={item.stock}/>
    </div>
  )
}

export default ItemDetail