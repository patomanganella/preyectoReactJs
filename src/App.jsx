import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemContainerList from './Componentes/ItemContainerList';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemContainerList greeting={'Hola Mundo'}/>
    </div>
  );
}

export default App;
