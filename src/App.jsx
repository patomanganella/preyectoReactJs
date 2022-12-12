import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemContainerList from './Componentes/ItemContainerList';
import ItemList from './Componentes/ItemList';
import ItemDetail from './Componentes/ItemDetail';
import ItemCount from './Componentes/ItemCount';
import ItemDetailContainer from './Componentes/ItemDetailContainer';




function App() {

  return (    
    <BrowserRouter>

   <div>   
    <NavBar/>

    <Routes>
      <Route path='/' element={<ItemList/>} />
      <Route path='/category/:idCategory' element={<ItemList/>} /> 
      <Route path='/item/:id' element={<ItemDetail/>} /> 
   
            
    </Routes>
    </div>
    </BrowserRouter>
         
       
   
  );
}

export default App;
