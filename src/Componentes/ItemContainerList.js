import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { PRODUCTOS } from '../Componentes/ItemList'
import { ItemList } from '../Componentes/ItemList'



const PRODUCTOS = [
  {id: 1, title: "Dog Chow ", description: "Bolsa Alimento Dog Chow", precio: 2500, stock:5, img: "https://i.postimg.cc/Cx6S7XsG/Dog-chow.jpg", category:"Perros"},
  {id: 2, title: "Gati", description: "Bolsa Alimento Gati", precio: 3500, stock:3,img: "https://i.postimg.cc/1RcS2fK5/gati-gato.jpg", category:"Gatos"},
  {id: 3, title: "Plantas", description: "Cajón de Plantas", precio: 2200,stock:8, img:"https://i.postimg.cc/3RQMbT4v/Vivero.jpg", category:"Plantas"}
  
]


export const ItemContainerList = () => {

  const [productList, setProductList] = useState([])
  
  const { idCategory } = useParams()
  
  const getProducts = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(PRODUCTOS),2000)
  })
  
  useEffect(()=> {
    if (idCategory) {
      getProducts()
      .then(PRODUCTOS => setProductList (PRODUCTOS.filter(PRODUCTOS.category === idCategory)))
      .catch(error => console.error(error))
      
    }else{
      getProducts()
      .then(PRODUCTOS => setProductList(PRODUCTOS))
      .catch(error => console.error(error))
    }
  }, [idCategory])
  
  
  return (
    <ItemContainerList productListt={productList}/>
  )
  
  }

export default ItemContainerList