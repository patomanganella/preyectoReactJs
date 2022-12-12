import React from 'react'
import { Link } from 'react-router-dom'





const ItemDetailContainer = ({title,description,precio,stock,id,img}) => {
  return (
    <div>

<div class="flex font-sans m-5 ">
  <div class="flex-none w-48 relative ">
    <img src={img} alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form class="flex-auto p-6 ">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
       {title}
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        Precio: $ {precio}
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 m-2">
        Stock Disponible: {stock}
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
      <Link to={`/item/${id}`}>
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
         Ver más detalles

        </button>
        </Link>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Agregar al carro
        </button>
      </div>

    </div>
    <p class="text-sm text-slate-700">
      {description}
    </p>
  </form>
</div>
    </div>




  )
}

export default ItemDetailContainer

