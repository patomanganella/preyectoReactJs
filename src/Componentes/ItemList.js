import src from 'daisyui'
import { useEffect, useState } from 'react'
import ItemDetailContainer from './ItemDetailContainer'


const PRODUCTOS = [
    {id: 1, title: "Dog Chow ", description: "Bolsa Alimento Dog Chow", precio: 2500, stock:5, img: "https://i.postimg.cc/Cx6S7XsG/Dog-chow.jpg", category:"Perros"},
    {id: 2, title: "Gati", description: "Bolsa Alimento Gati", precio: 3500, stock:3,img: "https://i.postimg.cc/1RcS2fK5/gati-gato.jpg", category:"Gatos"},
    {id: 3, title: "Plantas", description: "Cajón de Plantas", precio: 2200,stock:8, img:"https://i.postimg.cc/3RQMbT4v/Vivero.jpg", category:"Plantas"}
    
]

const ItemList = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      getProductos()
       .then( res => {
        setItems (res)
       })
       .catch( err => {console.log(err)})
    },[])
    
    const getProductos = () => {
      return new Promise( (resolve,reject) =>{
        setTimeout(() => {
            resolve( PRODUCTOS )
        }, 2000)
      })
    
}

  return (
    <div>
        {items.map( i => <ItemDetailContainer key= {i.id} {...i}/>)}
        
    </div>
  )
}

export default ItemList